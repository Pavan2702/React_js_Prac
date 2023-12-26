import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

export default function Admin() {
  const [data, setData] = useState([])

  useEffect(() => {
    let RegData = JSON.parse(localStorage.getItem("RegisterData")) || []
    let x = RegData.filter((e)=>{
      return e.usertype !== "admin"
    })
    setData(x)
  }, [])
  return (
    <><Table striped  >
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Email Id</th>
          <th>Password</th>
          <th>User Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e,i) => {
          return (
            <tr key={i}>
              <th>{i+1}</th>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>{e.usertype}</td>
            </tr>

          )
        })}
      </tbody>
    </Table></>
  )
}
