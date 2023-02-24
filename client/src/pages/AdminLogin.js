import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const login = () => {
    fetch("http://localhost:3001/adminLogin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Cookies.set("adminSessionId", data, { expires: 7 });
        navigate("/admin");
      });
  };

  return (
    <div className=" w-screen flex flex-col justify-center items-center min-h-screen bg-slate-200 gap-2 p-2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Willkommen Admin</h2>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <div className="card-actions justify-between">
          <button className="btn btn-ghost text-primary" onClick={() => navigate("/")}>zum Spieler Login</button>
            <button className="btn btn-primary" onClick={login}>
              LogIn
            </button>
          </div>
         
        </div>
      </div>
      
    </div>
  )
}
