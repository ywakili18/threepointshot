import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'
const QueryApi = ({ player }) => {
  // call use effect to perform api request, passing in player data into api.
  const [playerData, setPlayerData] = useState([])

  useEffect(() => {
    const getResults = () => {
      axios
        .get(`https://www.balldontlie.io/api/v1/players/?search=${player}`)
        .then((res) => setPlayerData(res.data.data))
        .catch((e) => console.log('Error: ', e))
    }
    getResults()
  }, [])

  // Mapped through data to grab id. Need to pass Id into a second api call, to grab season averages.
  return (
    <div>
      <PlayerCard playerData={playerData} />
    </div>
  )
}

export default QueryApi
