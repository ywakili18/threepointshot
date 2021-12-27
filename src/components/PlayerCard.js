import React from 'react'
import ViewStats from './pages/ViewStats'
import { GiBasketballJersey } from 'react-icons/gi'
import { motion } from 'framer-motion'
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
          <div key={pro.id} className="mt-2 text-orange-400 p-10">
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
            <motion.div
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ViewStats
                playerData={playerData}
                player={player}
                className="viewStats"
              />
            </motion.div>
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
