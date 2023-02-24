import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const GameLogic = ({ playerData, updatePlayerData }) => {
  const [currentGame, setCurrentGame] = useState();
  const [pricePerLetter, setPricePerLetter] = useState({});
  const [word, setWord] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/getPriceOfLetters", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        gameId: currentGame,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPricePerLetter(data);
      });
    updatePlayerData();
  }, [currentGame]);

  const startGame = () => {
    setWord(["_"])
    fetch("http://localhost:3001/createGame", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sessionId: Cookies.get("sessionId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentGame(data);
      });
      
  };

  const guessLetter = async (letter) => {
    await setGuessedLetters((old) => [...old, letter]);
    fetch("http://localhost:3001/guessLetter", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        gameId: currentGame,
        letter: letter,
        sessionId: Cookies.get("sessionId"),
      }),
    })
      .then((res) => {
        if (res.status === 402) {
          setGameOver(true);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWord(data);
        updatePlayerData();
      });
  };

  if (gameOver || playerData.hearts < 1 || playerData.money < 1) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Game Over! Your score will be visible on the Leaderboard.
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!currentGame) {
    return (
      <div className="flex justify-center items-center h-full">
        <button className="btn btn-xl" onClick={startGame}>
          Start Round
        </button>
      </div>
    );
  }

  if(!word.includes("_")){
    return (
      <div className="flex flex-col justify-center items-center h-full gap-2">
        <h1 className="text-lg font-semibold">You won</h1>
        <h1>The word was: {word.join("")}</h1>
        <button className="btn btn-xl" onClick={startGame}>
          Start new Game
        </button>
      </div>
    );
  }

  var buttons = [];

  for (let key in pricePerLetter) {
    if (guessedLetters.includes(key)) {
      buttons.push(
        <button className="btn" key={key}>
          {key} ({pricePerLetter[key]})
        </button>
      );
    } else {
      buttons.push(
        <button
          className="btn btn-accent"
          key={key}
          onClick={() => guessLetter(key)}
        >
          {key} ({pricePerLetter[key]})
        </button>
      );
    }
  }

  var letters = [];

  for (let index = 0; index < word.length; index++) {
    letters.push(
      <kbd
        className="kbd kbd-lg m-2"
        key={Math.floor(Math.random() * Math.floor(10000)) + word[index]}
      >
        {word[index]}
      </kbd>
    );
  }

  return (
    <div>
      <div className="flex">
        <div className="w-1/4 grid grid-cols-2 gap-2">{buttons}</div>

        <div className="divider lg:divider-horizontal"></div>
        <div className="w-full">
          <div className="flex items-center mt-3 gap-4">
            <h1 className="font-semibold text-md ">
              Game Id:{" "}
              <div className="badge badge-lg badge-secondary">
                {currentGame}
              </div>
            </h1>
            <button className="btn btn-xs" onClick={() => setCurrentGame("")}>
              Leave Game
            </button>
          </div>
          <div className="flex justify-center items-center mt-32">
          <div>{letters}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
