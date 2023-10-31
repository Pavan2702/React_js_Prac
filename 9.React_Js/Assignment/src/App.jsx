import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Homepage from "./1.Project/Homepage"
import UseStateFun from './Usestate/UseStateFun'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <UseStateFun />
      </div>
      {/* <Homepage/>  */}

    </>
  )
}

export default App
