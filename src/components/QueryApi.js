import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const QueryApi = ({ player }) => {
  useEffect(() => {
    const getResults = () => {
      axios
        .get(`https://www.balldontlie.io/api/v1/players/?search=${player}`)
        .then((res) => console.log(res.data))
    }
    getResults()
  }, [])

  return (
    <div>
      <h1>This is QueryApi component.</h1>
      <p>This is the data from the input form, from SearchForm.js: {player}</p>
    </div>
  )
}

export default QueryApi
