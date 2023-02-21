import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const GameLogic = ({ updatePlayerData }) => {
  const [currentGame, setCurrentGame] = useState();
  const [pricePerLetter, setPricePerLetter] = useState({});
  const [word, setWord] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);

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
      .then((res) => res.json())
      .then((data) => {
        setWord(data);
        console.log(data);
      });
    await updatePlayerData();
  };

  if (!currentGame) {
    return (
      <div className="flex justify-center items-center h-full">
        <button className="btn btn-xl" onClick={startGame}>
          Start Round
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
        <div className="">
          <div>{letters}</div>
        </div>
      </div>
      <h1 className="font-semibold text-md ">
        Game Id:{" "}
        <div className="badge badge-lg mt-3 badge-secondary">{currentGame}</div>
      </h1>
    </div>
  );
};
