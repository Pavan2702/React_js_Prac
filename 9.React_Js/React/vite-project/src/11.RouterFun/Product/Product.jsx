import React from 'react'

export default function Product() {
  return (
    <>
      <div style={{width:"80vw", backgroundColor:"orange"}}            
      className='d-flex justify-content-evenly p-3 align-content-center'
>


        {[1, 2, 3, 4, 5, 6].map((e, i) => {
          return <div
          style={{width:"100px", backgroundColor:"white"}}
            className='border border-dark rounded d-flex justify-content-center align-content-center'
            key={i}>{e}</div>
        })}
      </div>
    </>
  )
}
