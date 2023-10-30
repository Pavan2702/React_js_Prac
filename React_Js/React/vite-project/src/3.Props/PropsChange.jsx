import React from 'react'
import { Button } from 'reactstrap'

export default function PropsChange(props) {
    let ChangeName=()=>{
props.name="Name2"
    }
  return (
    <div>
        <h1>Hello World.....{props.name}</h1>
        <Button color="danger" onClick={()=>ChangeName()}>Change Name</Button>
    </div>
  )
}
