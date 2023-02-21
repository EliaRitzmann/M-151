import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Game = () => {
  const session = Cookies.get("sessionId");
  const [player, setPlayer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

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
    <div>
      sessionid: {session} {player.money} <br></br>{" "}
      <button onClick={logOut}>logout</button>
    </div>
  );
};
