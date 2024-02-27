import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap';
import { FatchUserData } from '../Redux/features/API/Api';

export default function APIData() {

let APIData = useSelector((store)=>{
    return store.APISlice;
})
console.log("🚀 ~ APIData ~ APIData:", APIData)

const dispatch = useDispatch()

    return (
        <>
            <div>
                <Button onClick={()=>dispatch(FatchUserData())}> click Me</Button>
            </div>
        </>
    )
}
