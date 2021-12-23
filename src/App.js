import './App.css'
import NavBar from './components/NavBar'
import QueryApi from './components/QueryApi'
import SearchForm from './components/SearchForm'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [player, setPlayer] = useState('')

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<SearchForm player={player} setPlayer={setPlayer} />}
        />
        <Route path="/results" element={<QueryApi player={player} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
