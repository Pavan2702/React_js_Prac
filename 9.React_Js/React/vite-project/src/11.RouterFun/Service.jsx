import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Service() {
  return (
    <>
      <div>
        <h1>Service</h1>
        <ul>
          <li>
            <NavLink to={'bike'}>Bike Service</NavLink>
          </li>
          <li>
            <NavLink to={'car'}>car Service</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  )
}
