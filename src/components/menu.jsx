import React, { useState } from 'react'
import axios from 'axios'
import Search from './MenuSearch';

export default function Menu() {
  const [data, setData] = useState([])
  const [recommendations, setRecommendations] = useState([]) // New state
  const [error, setError] = useState("");

  const menuList = () => {
    axios.get("/api/v1/menu")
      .then((response) => {
        setData(response.data);
        setRecommendations([]); // Clear recommendations on full fetch
        setError("")
      })
      .catch((err) => {
        setError('Connection Error: ' + err.message);
        setData([]);
      })
  }

  return (
    <>
      <h3>Menu List</h3>
      <button onClick={menuList}>Fetch All Menu</button>
      <br /><br />

      {/* Pass the setters to the Search component */}
      <Search setData={setData} setRecommendations={setRecommendations} />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Main List Section (Updates with search results) */}
      <div>
        {data?.map((item) => (
          <ul key={item.itemid}>
            <li><b>Id: </b>{item.itemid}</li>
            <li><b>Name: </b>{item.name}</li>
            <li><b>Price: </b>{item.price}</li>
          </ul>
        ))}
      </div>

      <hr />

      {/* New Recommendation Section at the bottom */}
      {recommendations.length > 0 && (
        <div>
          <h3>Recommendations</h3>
          {recommendations.map((item) => (
            <div key={item.itemid}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}