import React from 'react'
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
    <div className=" text-xl sm:text-2xl md:text-4xl">
      <div className="searchForm">
        {' '}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={player}
            onChange={handleChange}
            placeholder="ex: Kobe, Giannis...."
            className="
          placeholder-slate-700
          bg-slate-400
          rounded-lg 
          text-center text-2xl text-black p-1 focus:outline-none focus:ring focus:ring-orange-400
          "
            required
          />
          <button
            className=" enterBtn border-2 rounded-lg p-1 text-2xl
          text-orange-300 
          hover:text-black hover:bg-orange-400 hover:border-black ml-4"
          >
            Search
          </button>
        </form>
      </div>
      <label>Enter Player</label>
    </div>
  )
}

export default SearchForm
