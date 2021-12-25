import React from 'react'
import axios from 'axios'
const StatsPage = ({ playerData }) => {
  const statsUrl = 'https://www.balldontlie.io/api/v1/season_averages'

  const getStats = (playerId) => {
    axios
      .get(`${statsUrl}?player_ids[]=${playerId}`)
      .then((res) => console.log(res.data))
      .catch((e) => console.log('Error: ', e))
  }
  const mapData = (data) => {
    for (let i = 0; i < data.length; i++) {
      let id = data[i].id
      console.log(id)
      getStats(id)
    }
  }
  mapData(playerData)

  return (
    <div>
      <h1>stats</h1>
    </div>
  )
}

export default StatsPage
