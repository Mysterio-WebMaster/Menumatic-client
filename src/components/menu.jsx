import React, { useState } from 'react'
import axios from 'axios'

export default function menu() {

  const [data, setData] = useState([])

  const menuList = () => {
    axios.get("http://localhost:5000/v1/menu")
      .then((response) => {
        console.log(response.data);
        setData(response.data)
      })
      .catch((err) => {
        console.log(err.message);
        setData('Connection Error')
      })
  }

  return (
    <>
      <h3>Menu List</h3>
      <button onClick={menuList}>Fetch Menu</button>
      {data.map((item) => (
        <ul>
          <li><b>Id: </b>{item.itemid}</li>
          <li><b>Category: </b>{item.category}</li>
          <li><b>Name: </b>{item.name}</li>
          <li><b>Price: </b>{item.price}</li>
        </ul>
      ))}
    </>
  )
}
