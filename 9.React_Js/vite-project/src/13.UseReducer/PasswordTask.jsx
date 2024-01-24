import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap'

export default function PasswordTask() {
    let [value, dispatch] = useReducer(reducer,{
        id: "",
        password: "",
    })
    let [array, setarray] = useState([])

    // function reducer() {
    //     setarray([...array, value])
    // }

    const submit = ()=>{
        
    }

    console.log(array.id);
    return (
        <>
            <h1>{array.id}</h1>
            <input type="text"
                onChange={(e) => dispatch({ ...value, id: e?.target?.value })}
            />
            <Button onClick={submitId}>id</Button>
            <input type="text"
                onChange={(e) => dispatch({ ...value, password: e?.target?.value })}
            />
            <Button>Password</Button>
        </>
    )
}
