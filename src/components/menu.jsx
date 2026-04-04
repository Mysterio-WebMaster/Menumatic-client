import React, { useState } from 'react'
import axios from 'axios'

export default function Menu() {

  const [data, setData] = useState([])
  const [error, setError] = useState("");

  const menuList = () => {
    axios.get("/api/v1/menu")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setError()
      })
      .catch((err) => {
        console.log(err.message);
        setError('Connection Error: ' + err.message);
        setData([]);
      })
  }

  return (
    <>
      <h3>Menu List</h3>
      <button onClick={menuList}>Fetch Menu</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data?.map((item) => (
        <ul key={item.itemid}>
          <li><b>Id: </b>{item.itemid}</li>
          <li><b>Category: </b>{item.category}</li>
          <li><b>Name: </b>{item.name}</li>
          <li><b>Price: </b>{item.price}</li>
        </ul>
      ))}
    </>
  )
}
