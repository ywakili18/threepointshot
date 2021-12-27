import React from 'react'
import ViewStats from './pages/ViewStats'
import { GiBasketballJersey } from 'react-icons/gi'
const PlayerCard = ({ playerData, player }) => {
  return (
    <div>
      <div className="flex justify-center text-6xl text-orange-500 mt-2">
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
      </div>
      <div className=" grid text-center text-xl sm:text-2xl md:text-3xl">
        {playerData.map((pro) => (
          <div
            key={pro.id}
            className="border-2 border-orange-500  mt-2 text-orange-400 p-10"
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
                <span className="ml-2 text-orange-300">
                  {pro.team.full_name}
                </span>
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
      <div className="flex justify-center text-6xl text-orange-500 mt-2">
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
        <GiBasketballJersey />
      </div>
    </div>
  )
}

export default PlayerCard
