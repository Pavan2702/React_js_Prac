import React, { useEffect, useState } from 'react'
import { Button, Table } from 'reactstrap'
import Register from '../Components/Modal/Register'

export default function Admin() {
  const [data, setData] = useState([])
  // const [passIndex, setPassIndex] = useState([])
  const [regmodal, setRegmodal] = useState(false);

  const Regtoggle = () => setRegmodal(!regmodal);
  let RegData = JSON.parse(localStorage.getItem("RegisterData")) || []

  useEffect(() => {
    setData(RegData.filter((e) => e.usertype !== "admin"))
  }, [RegData])

  // function showPassword(index) {
  //   setPassIndex([...passIndex, index])
  // }

  // function hidePassword(index) {
  //   const filteredData = passIndex?.filter((e, i) => i !== index);
  //   setPassIndex(filteredData);
  // }

  return (
    <>
      <Register modal={regmodal} toggle={Regtoggle} />

      <Button onClick={Regtoggle}>Add User</Button>
      <Table striped>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Email Id</th>
            <th>Password</th>
            {/* <th>Icon</th> */}
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                {/* <td>{passIndex?.includes(i) ? e.password : '********'}</td>
                <td>
                  {passIndex.includes(i) ? (
                    <Eye
                      role="button"
                      onClick={() => hidePassword(i)}
                    />
                  ) : (
                    <EyeOff
                      role="button"
                      onClick={() => showPassword(i)}
                    />
                  )}
                </td> */}
                <td>{e.usertype}</td>
              </tr>

            )
          })}
        </tbody>
      </Table></>
  )
}
