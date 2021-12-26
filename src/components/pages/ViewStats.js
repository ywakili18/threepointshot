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
  console.log(stats)
  return (
    <div>
      {stats.map((stat) => (
        <h3 key={stat.player_id}>{stat.season}</h3>
      ))}
    </div>
  )
}

export default ViewStats
