import React, { useEffect, useState } from 'react'
import { LeaderboardPlace } from './LeaderboardPlace';

export const Loeaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/getLeaderboard", {
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
              setLeaderboard(data);
            });
    }, [])

    var elements = []

    for (let index = 0; index < leaderboard.length; index++) {
        elements.push(<LeaderboardPlace data={leaderboard[index]}></LeaderboardPlace>)
    }
    

  return (
    <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
  <h2 className="card-title">Leaderboard</h2>
  <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>place</th>
        <th>username</th>
        <th>date</th>
        <th>money</th>
        <th>number of Rounds</th>
      </tr>
    </thead>
    <tbody>
    {elements}
    </tbody>
  </table>
</div>
  </div>
</div>
  )
}
