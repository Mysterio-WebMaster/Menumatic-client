import React, { useState } from 'react'
import axios from 'axios'

export default function connection() {

  const [data, setData] = useState()

  const connect = () => {
    axios.get("http://localhost:5000/")
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
