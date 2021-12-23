import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SearchForm = ({ player, setPlayer }) => {
  const history = useNavigate()

  const handleChange = (e) => {
    setPlayer(e.target.value)
    console.log({ player })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { player }
    console.log(data, 'THIS THEDATA')
    history('/results')
  }
  return (
    <div>
      <h1>This is SearchForm Component.</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={player} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm
