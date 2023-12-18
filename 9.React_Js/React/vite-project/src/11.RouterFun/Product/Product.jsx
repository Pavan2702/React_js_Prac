import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product() {
  const [allData, setallData] = useState([])
  const navigate = useNavigate()
  const redirect = (e) => {
    navigate(`/singlepage/${e}`)
  }
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products`,
    }).then((res) => {
      console.log("res", res.data);
      setallData(res.data);
    })
  }, [])

  return (
    <>
      <div style={{ width: "80vw", backgroundColor: "orange" }}
        className='d-flex justify-content-evenly p-3 align-content-center'
      >

        {allData.map((e, i) => {
          return <div
            role='button'
            onClick={() => redirect(e.id)}
            style={{ width: "100px", backgroundColor: "white" }}
            className='border border-dark rounded d-flex justify-content-center align-content-center'
            key={i}>
            <img className='w-50' src={e.image} alt='' />
          </div>
        })}
      </div>
    </>
  )
}
