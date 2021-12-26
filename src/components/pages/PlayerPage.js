import React from 'react'
import { useState, useEffect } from 'react'
import PlayerCard from '../PlayerCard'
import { useNavigate } from 'react-router-dom'
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
      <div>
        <PlayerCard playerData={playerData} player={player} />
      </div>
    </div>
  )
}

export default PlayerPage
