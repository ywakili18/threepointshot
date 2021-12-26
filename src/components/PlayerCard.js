import React from 'react'

const PlayerCard = ({ playerData }) => {
  console.log(playerData)
  return (
    <div className=" grid text-center justify-evenly text-xl sm:text-2xl md:text-3xl">
      {playerData.map((player) => (
        <div
          key={player.id}
          className="border-2 border-orange-500 rounded-2xl mt-2 text-orange-400 p-10"
        >
          <ul>
            <li className="bg-orange-500 text-black font-black">
              {player.first_name} {player.last_name}
            </li>
            <li>
              <span className="font-extrabold underline">Position</span>:
              <span className="ml-1 text-orange-300"> {player.position}</span>
            </li>
            <li>
              <span className="font-extrabold underline">Team</span>:
              <span className="ml-2 text-orange-300">
                {player.team.full_name}
              </span>
            </li>
            <li>
              <span className="font-extrabold underline">Conference</span>:
              <span className="ml-2 text-orange-300">
                {player.team.conference}
              </span>
            </li>
            <button
              className="
            enterBtn border-2 rounded-lg p-1 text-lg sm:text-xl md:text-2xl text-orange-300 
            hover:text-black hover:bg-orange-400 hover:border-black mt-2"
            >
              View stats
            </button>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PlayerCard
