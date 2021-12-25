import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdBasketball } from 'react-icons/io'
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
          href="#_"
          className="
          relative 
          inline-flex 
          items-center 
          justify-center 
          border-2 
          rounded-lg 
          p-1 
          w-28
          ml-10
          h-12
          overflow-hidden 
          font-medium 
          text-orange-300 
          transition duration-900   
          border-purple-100 
          shadow-md group 
          hover:border-black"
          onClick={onClick}
        >
          <span
            className="absolute inset-0 flex items-center justify-center 
          text-black duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease"
          >
            <IoMdBasketball />
          </span>
          <span className="absolute flex items-center justify-center w-full  text-orange-300 transition-all duration-300 transform group-hover:translate-x-full ease">
            kobe!
          </span>
          <span className="relative invisible">Button Text</span>
        </button>
      </div>
    </div>
  )
}

export default Home
