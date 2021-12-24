import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const history = useNavigate()
  const onClick = () => {
    history('/search')
  }
  return (
    <div className="text-xl sm:text-2xl md:text-4xl">
      <h1 className="threePtTitle text-center mt-2">
        <span className="text-orange-400 sm:text-5xl">3</span>pointshot{' '}
        <img
          src="https://i.giphy.com/media/xT9IgCfqoMQEWOUef6/giphy.webp"
          className="h-12 sm:h-24"
          alt="Basketball spinning"
        />
      </h1>
      <div className="home">
        <p>search for nba player stats </p>
        <button
          onClick={onClick}
          className="
            enterBtn border-2 rounded-lg p-1 
          text-orange-300 
          hover:text-black hover:bg-orange-400 hover:border-black ml-4"
        >
          kobe!
        </button>
      </div>
    </div>
  )
}

export default Home
