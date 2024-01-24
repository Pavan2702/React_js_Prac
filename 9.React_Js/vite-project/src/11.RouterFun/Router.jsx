import React from 'react'
import Home from './Home'
import Service from './Service'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import Navbar from './navbar'
import Carservice from './carservice'
import Bikeservice from './bikeservice'
import Product from './Product/Product'
import Singlepage from './Product/Singlepage'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service'  >
            <Route index path='' element={<Service />} />
            <Route path='car' element={<Carservice />} />
            <Route path='bike' element={<Bikeservice />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/singlepage/:id' element={<Singlepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
