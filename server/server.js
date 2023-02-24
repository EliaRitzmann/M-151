const express = require("express");
const uuidv4 = require("uuid").v4;
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
//app.use(session({ secret: "secret", resave: false, saveUninitialized: false, cookie: { secure: true } }));
app.use(cors());

//gamesessions (gets reset after every reload of server)
const gameSessions = {};

const adminSessions = {};

// Endpoint to retrieve the leaderboard
app.get("/getLeaderboard", async (req, res) => {
  // Retrieve all players from the database and sort them by money in descending order
  const leaderboard = await prisma.player.findMany({
    orderBy: {
      money: "desc",
    },
  });

  // Map the players to a new array with only the relevant data and add a rank
  const formattedLeaderboard = leaderboard.map((player, index) => ({
    rank: index + 1,
    username: player.username,
    time: new Date(player.timeOfPlay),
    hearts: player.hearts,
    money: player.money,
    rounds: player.numberOfRounds,
  }));

  // Return the formatted leaderboard as the response
  res.json(formattedLeaderboard);
});

//adminLogin
app.post("/adminLogin", (req, res) => {
  const { username, password } = req.body;
  if (username !== "admin" || password !== "admin") {
    return res.status(401).send("Invalid username or password");
  }

  const sessionId = uuidv4();

  adminSessions[sessionId] = {
    username: username,
  };

  res.status(200).json(sessionId);
});

// Handler for getting player data by session ID
app.post("/getAdmin", async (req, res) => {
  // Extract session ID from request body
  const { adminSessionId } = req.body;

  const adminSession = adminSessions[adminSessionId];

  // If no player is found, return a 401 Unauthorized error
  if (!adminSession) {
    return res.status(401).send("Invalid session");
  }

  // If the player is found, return their data as a JSON response
  res.json(adminSession);
});

app.post("/getData", async (req, res) => {
  const { adminSessionId } = req.body;

  const adminSession = adminSessions[adminSessionId];

  // If no player is found, return a 401 Unauthorized error
  if (!adminSession) {
    return res.status(401).send("Invalid session");
  }

  const categories = await prisma.categories.findMany();

  const words = await prisma.word.findMany();

  res.status(200).json({ categories: categories, words: words });
});

app.post("/addCategory", async (req, res) => {
  const { adminSessionId, name } = req.body;

  const adminSession = adminSessions[adminSessionId];

  // If no player is found, return a 401 Unauthorized error
  if (!adminSession) {
    return res.status(401).send("Invalid session");
  }
  console.log(name);

  await prisma.categories.create({
    data: {
      name: name,
    },
  });

  res.sendStatus(200);
});

app.post("/addWord", async (req, res) => {
  const { adminSessionId, id, content } = req.body;

  const adminSession = adminSessions[adminSessionId];

  // If no player is found, return a 401 Unauthorized error
  if (!adminSession) {
    return res.status(401).send("Invalid session");
  }

  await prisma.word.create({
    data: {
      content: content,
      categoryId: parseInt(id)
    },
  });

  res.sendStatus(200);
});

app.delete("/deleteWord", async (req, res) => {
  const { adminSessionId, id } = req.body;

  const adminSession = adminSessions[adminSessionId];

  // If no player is found, return a 401 Unauthorized error
  if (!adminSession) {
    return res.status(401).send("Invalid session");
  }

  await prisma.word.delete({ where: { id: id } });

  res.sendStatus(200);
});

app.delete("/deleteCategory", async (req, res) => {
  const { adminSessionId, id } = req.body;

  const adminSession = adminSessions[adminSessionId];

  // If no player is found, return a 401 Unauthorized error
  if (!adminSession) {
    return res.status(401).send("Invalid session");
  }

  await prisma.categories.delete({ where: { id: id } });

  res.sendStatus(200);
});

// Endpoint for registering a new player
app.post("/registerPlayer", async (req, res) => {
  // Extract the username from the request body
  const { username } = req.body;

  // Check if the username is valid (i.e., not an empty string)
  if (username === "") {
    // Return a 401 Unauthorized status code with an error message
    return res.status(401).send("Invalid username");
  }

  // Generate a unique session ID for the player using the uuidv4 library
  const sessionId = uuidv4();

  // Create a new player in the database with the provided username, session ID, and initial money and hearts values
  const player = await prisma.player.create({
    data: {
      sessionId: sessionId,
      username: username,
      money: 1000,
      hearts: 30,
    },
  });

  // Return a 200 OK status code with the player's session ID in the response body
  res.status(200).json(sessionId);
});

// Handler for getting player data by session ID
app.post("/getPlayer", async (req, res) => {
  // Extract session ID from request body
  const { sessionId } = req.body;

  // Query the database to find the player with the given session ID
  const player = await prisma.player.findFirst({
    where: { sessionId: sessionId },
  });

  // If no player is found, return a 401 Unauthorized error
  if (!player) {
    return res.status(401).send("Invalid session");
  }

  // If the player is found, return their data as a JSON response
  res.json(player);
});

// Endpoint for creating a new game session
app.post("/createGame", async (req, res) => {
  // Extract necessary information from the request body
  const { sessionId } = req.body;

  // Find the user's session in the database and get their ID
  const userSession = await prisma.player.findFirst({
    where: { sessionId: sessionId },
  });
  const userId = userSession.id;

  // Increment the user's numberOfRounds by 1 in the database
  await prisma.player.update({
    where: { id: userId },
    data: { numberOfRounds: { increment: 1 } },
  });

  // Generate random prices for each letter in the word
  const pricePerLetter = generateRandomNumbers();

  // Generate a unique ID for the game session
  const gameId = uuidv4();

  const words = await prisma.word.findMany()

  const word = await words[Math.floor(Math.random() * words.length)];

  // Add the game session to the gameSessions object with the word, pricePerLetter, and guessedLetters properties
  gameSessions[gameId] = {
    word: word.content.toLowerCase(), // TODO: Replace this with actual game logic
    pricePerLetter: pricePerLetter,
    guessedLetters: [],
  };

  // Log the gameSessions object for debugging purposes
  console.log(gameSessions);

  // Return the game session ID as the response
  res.json(gameId);
});

app.post("/getPriceOfLetters", (req, res) => {
  const { gameId } = req.body;

  const gameSession = gameSessions[gameId];

  res.json(gameSession?.pricePerLetter);
});

// Endpoint for guessing a letter in the word
app.post("/guessLetter", async (req, res) => {
  // Extract necessary information from the request body
  const { gameId, letter, sessionId } = req.body;

  // Find the user's session in the database
  const userSession = await prisma.player.findFirst({
    where: { sessionId: sessionId },
  });

  // Return a 400 error if the user has no money or hearts
  if (userSession.money <= 0 || userSession.hearts <= 0) {
    return res.status(402).send("User has no money or hearts");
  }
  // Get the user's ID from the session
  const userId = userSession.id;

  // Add the guessed letter to the game session's guessedLetters array
  gameSessions[gameId].guessedLetters.push(letter);

  // Get the game session from the gameSessions object
  const gameSession = gameSessions[gameId];

  // Get the price of the guessed letter from the game session's pricePerLetter object
  const pricePerLetter = gameSession.pricePerLetter;
  const letterPrice = pricePerLetter[letter] || 0;

  // Update the user's money in the database by subtracting the letter's price
  await prisma.player.update({
    where: { id: userId },
    data: { money: { decrement: letterPrice } },
  });

  // Check if the guessed letter is not in the word, then subtract a heart
  const splitString = gameSession.word.split("");
  if (!splitString.includes(letter)) {
    await prisma.player.update({
      where: { id: userId },
      data: { hearts: { decrement: 1 } },
    });
  }

  // Build an array of the word with guessed letters filled in and unguessed letters as underscores
  const wordArray = splitString.map((character) =>
    gameSession.guessedLetters.includes(character) ? character : "_"
  );

  // Check if all letters have been guessed correctly, then award the player 500 money
  if (!wordArray.includes("_")) {
    await prisma.player.update({
      where: { id: userId },
      data: { money: { increment: 500 } },
    });
  }

  // Return the word array as the response
  res.json(wordArray);
});

/**
 * Generates an object with randomly generated numbers for each letter of the alphabet.
 * The numbers are between 10 and 50 (inclusive).
 *
 * @returns {object} An object with keys for each letter of the alphabet and their corresponding random numbers.
 */
function generateRandomNumbers() {
  // Create a string containing all letters of the alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Create an empty object to store the random numbers
  const result = {};

  // Iterate over each letter of the alphabet
  for (let i = 0; i < alphabet.length; i++) {
    // Get the current letter
    const letter = alphabet[i];

    // Generate a random number between 10 and 50 (inclusive) and assign it to the current letter in the result object
    result[letter] = Math.floor(Math.random() * 41) + 10;
  }

  // Return the object with the random numbers
  return result;
}

app.listen(3001);
