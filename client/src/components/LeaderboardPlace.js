import React from 'react'

export const LeaderboardPlace = ({data}) => {
    const oldDate = data.time
    const date = new Date(oldDate).toLocaleDateString()

  return (
    <tr>
        <th>{data.rank}</th>
        <td>{data.username}</td>
        <td>{date}</td>
        <td>{data.money}</td>
        <td>{data.rounds}</td>
      </tr>
  )
}
