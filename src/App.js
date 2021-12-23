import './App.css'
import QueryApi from './components/QueryApi'
import SearchForm from './components/SearchForm'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [player, setPlayer] = useState('')

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<SearchForm player={player} setPlayer={setPlayer} />}
        />
        <Route path="/results" element={<QueryApi player={player} />} />
      </Routes>
    </div>
  )
}

export default App
