import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../ui/Pages/Home'
import About from '../ui/Pages/About'
import Contact from '../ui/Pages/Contact'
import Header from '../ui/Components/Header/Header'
import Product from '../ui/Pages/Product/Product'

export default function ApiRouter() {
    return (
        <> 
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/product' element={<Product/>}/>                                                                               />
                </Routes>
            </BrowserRouter>
        </>
    )
}
