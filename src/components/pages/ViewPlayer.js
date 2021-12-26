import React from 'react'
const ViewPlayer = ({ stats }) => {
  return (
    <div>
      {stats.map((stat) => (
        <div>
          <ul key={stat.player_id} className=" grid grid-cols-3">
            <li>Games Played: {stat.games_played}</li>
            <li>Pts: {stat.pts}</li>
            <li>Reb: {stat.pts}</li>
            <li>Ast:{stat.ast}</li>
            <li>FG%: {stat.fg_pct}</li>
            <li>Steals: {stat.stl}</li>
            <li>Blocks: {stat.blk}</li>
            <li>Min: {stat.min}</li>
            <li>Turnovers: {stat.turnover}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ViewPlayer
