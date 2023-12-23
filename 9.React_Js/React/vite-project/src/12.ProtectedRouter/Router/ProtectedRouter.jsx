import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'
export default function ProtectedRouter({ Component }) {
    // console.log("🚀 ~ file: ProtectedRouter.jsx:4 ~ ProtectedRouter ~ Component:", typeof Component)
    const navigate1 = useNavigate()
    useEffect(() => {
        let ProData = JSON.parse(localStorage.getItem("loginData"))
        // Object.keys(normal).length
        if (ProData && Object.keys(ProData).length === 0) {
            navigate1("/")
        }
    })

    return (
        <>
            <h1>Hiiii</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Email Id</th>
                        <th>Password</th>
                        <th>User Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            {Component}
        </>
    )
}
