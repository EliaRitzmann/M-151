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

//adminLogin
app.post("/adminLogin", (req, res) => {
  const { username, password } = req.body;
  if (username !== "admin" || password !== "admin") {
    return res.status(401).send("Invalid username or password");
  }

  const sessionId = uuidv4();
});

app.post("/registerPlayer", async (req, res) => {
  const { username } = req.body;
  if (username === "") {
    return res.status(401).send("Invalid username");
  }

  const sessionId = uuidv4();
  const player = await prisma.player.create({
    data: {
      sessionId: sessionId,
      username: username,
      money: 1000,
      hearts: 3,
    },
  });

  res.status(200).json(sessionId);
});

app.post("/getPlayer", async (req, res) => {
  const { sessionId } = req.body;
  console.log(sessionId);
  const userSession = await prisma.player.findFirst({
    where: { sessionId: sessionId },
  });

  console.log(userSession);

  if (!userSession) {
    return res.status(401).send("Invalid session");
  }
  console.log(generateRandomNumbers());
  res.json(userSession);
});

app.post("/createGame", async (req, res) => {
  const { sessionId } = req.body;

  //set roundcount plus 1
  const userSession = await prisma.player.findFirst({
    where: { sessionId: sessionId },
  });

  const id = userSession.id

  await prisma.player.update({
    where: {id},
    data: { numberOfRounds: { increment: 1 } },
  });

  const pricePerLetter = generateRandomNumbers();

  const gameId = uuidv4();

  gameSessions[gameId] = {
    word: "test",
    pricePerLetter: pricePerLetter,
    guessedLetters: [],
  };

  console.log(gameSessions);

  res.json(gameId);
});

app.post("/getPriceOfLetters", (req, res) => {
  const { gameId } = req.body;

  const gameSession = gameSessions[gameId];

  res.json(gameSession?.pricePerLetter);
});

app.post("/guessLetter", async (req, res) => {
  const { gameId, letter, sessionId } = req.body;

  gameSessions[gameId]?.guessedLetters.push(letter);

  const gameSession = gameSessions[gameId];

  var wordArray = [];

  const split_string = gameSession.word.split("");

  const userSession = await prisma.player.findFirst({
    where: { sessionId: sessionId },
  });

  const id = userSession.id

  //substract heart
  if(!split_string.includes(letter)){
    await prisma.player.update({
      where: {id},
      data: { hearts: { increment: -1 } },
    });
  }

  for (let index = 0; index < split_string.length; index++) {
    if (gameSession.guessedLetters.includes(split_string[index])) {
      wordArray.push(split_string[index]);
    } else {
      wordArray.push("_");

    }
  }

  res.json(wordArray);
});

function generateRandomNumbers() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = {};

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    const randomNumber = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    result[letter] = randomNumber;
  }

  return result;
}

app.listen(3001);
