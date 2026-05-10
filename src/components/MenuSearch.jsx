import axios from 'axios'
import React, { useState } from 'react'

// Destructure the setters from props
export default function MenuSearch({ setData, setRecommendations }) {

  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')

  const handleSearch = async () => {
    if (!searchValue.trim()) return
    setError('')

    // 1. Fetch AI Recommendations
    axios.get('/engine/menu/recommend?query=' + searchValue)
      .then((response) => {
        setRecommendations(response.data) // Updates parent state
      })
      .catch((err) => {
        setError('Engine Error: ' + err.message)
        setRecommendations([])
      })

    // 2. Fetch Regular Search Results
    axios.get("/api/v1/menu?query=" + searchValue)
      .then((response) => {
        setData(response.data); // Updates the main list in parent
      })
      .catch((err) => {
        setError('API Error: ' + err.message);
        setData([]);
      })
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a dish..."
        onChange={e => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}