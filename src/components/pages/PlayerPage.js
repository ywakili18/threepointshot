import React from 'react'
import { useState, useEffect } from 'react'
import PlayerCard from '../PlayerCard'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
const PlayerPage = ({ player }) => {
  const history = useNavigate()
  const [playerData, setPlayerData] = useState([])
  useEffect(() => {
    const getResults = async () => {
      await axios
        .get(`https://www.balldontlie.io/api/v1/players/?search=${player}`)
        .then((res) => {
          if (res.data.data[0] === undefined) {
            alert('Player does not exist')
            history('/search')
          } else if (res.data.data.length > 1) {
            alert('Enter a more specific name')
            history('/search')
          } else {
            setPlayerData(res.data.data)
          }
        })
        .catch((e) => console.log('Error: ', e))
    }
    getResults()
  }, [])
  return (
    <div>
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PlayerCard playerData={playerData} player={player} />
      </motion.div>
    </div>
  )
}

export default PlayerPage
