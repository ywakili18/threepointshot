import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const ViewStats = ({ player }) => {
  const [stats, setStats] = useState([])

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://www.balldontlie.io/api/v1/players/?search=${player}`)
        .then((res) => res.data.data)
        .then((res) =>
          res.map((item) =>
            axios
              .get(
                `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${item.id}`
              )
              .then((res) => setStats(res.data.data))
              .catch((e) => console.log(e, 'This is Error'))
          )
        )
        .catch((e) => console.log('Error: ', e))
    }
    getData()
  }, [])
  const getPercentage = (stat) => {
    let percent = stat * 100
    return percent.toString().substring(0, 4)
  }
  return (
    <div className="text-sm sm:text-lg md:text-2xl text-indigo-100 stats">
      {stats.map((stat) => (
        <ul key={stat.player_id} className="grid grid-cols-3 mt-10">
          <li>{stat.pts} ppg</li>
          <li>{stat.ast} apg</li>
          <li>{stat.reb} reb</li>
          <li>{stat.stl} stls</li>
          <li>{stat.blk} blk</li>
          <li>{getPercentage(stat.fg_pct)} FG%</li>
          <li>{stat.fga} FGA</li>
          <li>{getPercentage(stat.ft_pct)} FT%</li>
          <li>{stat.games_played} Games played</li>
          <li>{stat.min} Avg Min</li>
          <li>{stat.turnover} Turnovers PG</li>
        </ul>
      ))}
    </div>
  )
}

export default ViewStats
