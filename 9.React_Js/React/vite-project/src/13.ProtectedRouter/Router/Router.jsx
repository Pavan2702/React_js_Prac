import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../11.RouterFun/Home'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' element ={<About/>}/>
      </Routes> 
    </BrowserRouter>
    </>
  )
}
