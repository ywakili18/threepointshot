import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearchCircleSharp } from 'react-icons/io5'
import { GiBasketballJersey } from 'react-icons/gi'
const SearchForm = ({ player, setPlayer }) => {
  const history = useNavigate()

  const handleChange = (e) => {
    setPlayer(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history('/results')
  }
  return (
    <div className=" text-xl sm:text-2xl md:text-4xl">
      <div className="flex justify-center">
        <p className="text-center text-lg mt-10">Search for a player here</p>
        <p className=" items-center flex mt-10">
          <GiBasketballJersey className="text-orange-400" />
        </p>
      </div>

      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={player}
            onChange={handleChange}
            placeholder="ex: Giannis, Steph...."
            className="
          placeholder-slate-700
          bg-orange-400
          rounded-lg 
          text-center text-2xl text-black p-1 focus:outline-none focus:ring focus:ring-orange-400
          "
            required
          />
          <button
            className=" enterBtn border-2 rounded-lg p-1 text-2xl
          text-orange-300 
          hover:text-black hover:bg-orange-400 hover:border-black ml-4 "
          >
            <p className="flex text-3xl">
              kobe!
              <IoSearchCircleSharp className="text-4xl" />
            </p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchForm
