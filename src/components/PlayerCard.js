import React from 'react'
import ViewStats from './pages/ViewStats'
const PlayerCard = ({ playerData, player }) => {
  return (
    <div className=" grid text-center justify-evenly text-xl sm:text-2xl md:text-3xl">
      {playerData.map((pro) => (
        <div
          key={pro.id}
          className="border-2 border-orange-500 rounded-2xl mt-2 text-orange-400 p-10"
        >
          <ul>
            <li className="bg-orange-500 text-black font-black">
              {pro.first_name} {pro.last_name}
            </li>
            <li>
              <span className="font-extrabold underline">Position</span>:
              <span className="ml-1 text-orange-300"> {pro.position}</span>
            </li>
            <li>
              <span className="font-extrabold underline">Team</span>:
              <span className="ml-2 text-orange-300">{pro.team.full_name}</span>
            </li>
            <li>
              <span className="font-extrabold underline">Conference</span>:
              <span className="ml-2 text-orange-300">
                {pro.team.conference}
              </span>
            </li>
          </ul>
          <ViewStats playerData={playerData} player={player} />
        </div>
      ))}
    </div>
  )
}

export default PlayerCard
