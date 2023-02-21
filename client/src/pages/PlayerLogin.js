import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const PlayerLogin = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
  const register = () => {
    fetch("http://localhost:3001/registerPlayer", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Cookies.set("sessionId", data, { expires: 7 });
        navigate("/");
      });
  };


  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Willkommen</h2>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <div className="card-actions justify-between">
          <button className="btn btn-ghost text-primary" onClick={() => navigate("/adminLogin")}>zum admin login</button>
            <button className="btn btn-primary" onClick={register}>
              Spielen
            </button>
          </div>
         
        </div>
      </div>
      
    </div>
  );
};
