import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { GameLogic } from "../components/GameLogic";

export const Game = () => {
  const session = Cookies.get("sessionId");
  const [player, setPlayer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    updatePlayerData()
  }, []);

  const updatePlayerData = () => {
    fetch("http://localhost:3001/getPlayer", {
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
        setPlayer(data);
      });
  }

  useEffect(() => {
    if (!session) {
      navigate("/playerLogin");
    }
  }, [session]);

  const logOut = () => {
    Cookies.remove("sessionId");
    //refresh page and navigate to Login Page
    navigate("/");
  };

  return (
    <div className="bg-gray-100 h-screen p-4 flex flex-col gap-4">
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-figure text-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Hearts</div>
          <div className="stat-value text-error">{player.hearts}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="stat-title">Money</div>
          <div className="stat-value text-warning">{player.money}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
          </div>
          <div className="stat-title">Round</div>
          <div className="stat-value text-primary">{player.numberOfRounds}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <button className="btn btn-sm" onClick={logOut}>
              LogOut
            </button>
          </div>
          <div className="stat-value">{player.username}</div>
          <div className="stat-title">{player.timeOfPlay?.split("T")[0]}</div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl flex-grow">
        <div className="card-body ">
          <GameLogic playerData={player} updatePlayerData={updatePlayerData}></GameLogic>
        </div>
      </div>
    </div>
  );
};
