import React from 'react'
import Home from './Home'
import Service from './Service'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Contact from './Contact'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>


    </BrowserRouter>
    {/* <Home/> */}
    {/* <Service/> */}
    {/* <Contact/> */}
    </>
  )
}
