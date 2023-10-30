import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import ClassCom from './2.components/ClassCom.jsx'
import FunCom from './2.components/FunCom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClassCom/>
    <FunCom/>
    <FunCom/>
  </React.StrictMode>,
)
