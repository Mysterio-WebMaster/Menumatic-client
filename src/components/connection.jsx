import React, { useState } from 'react'
import axios from 'axios'
const HOST = import.meta.env.VITE_API_HOST

export default function connection() {

  const [data, setData] = useState()

  const connect = () => {
    axios.get(HOST)
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
      <h3>Test Connection</h3>
      <button onClick={connect}>Test</button>
      <br /><br />
      Result: {data}
    </>

  )
}
