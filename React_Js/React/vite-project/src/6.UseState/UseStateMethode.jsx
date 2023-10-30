import React, { useState } from 'react'
import { Button } from 'reactstrap';
export default function UseStateMethode() {
    let [ count, setCount ] = useState(100)
    let x = 10;
    function incButton() {
        setCount(count+1)
    }
    function decButton(){
        setCount(count-1)
    }
    
    return (
        <>
            <h1>UseStateMethode</h1>
            <h2>X is {x}</h2>
            <h2>Count is {count}</h2>
        <Button color="danger" onClick={()=>incButton()}>Increment</Button><br /><br />
        <Button  onClick={decButton}>Increment</Button>

        </>
    )
}
