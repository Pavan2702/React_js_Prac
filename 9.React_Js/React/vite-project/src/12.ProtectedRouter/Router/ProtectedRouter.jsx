import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProtectedRouter({ Component }) {
    // console.log("🚀 ~ file: ProtectedRouter.jsx:4 ~ ProtectedRouter ~ Component:", typeof Component)
    const navigate1 = useNavigate()
    useEffect(() => {
        let data = localStorage.getItem("loginarray")
        let normal = JSON.parse(data)
        // Object.keys(normal).length
        if (normal && Object.keys(normal).length === 0) {
            navigate1("/Login")
        }
    })

    return (
        <>
            <h1>Hiiii</h1>
            {Component}
        </>
    )
}
