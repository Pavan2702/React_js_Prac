import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "reactstrap"
import { addOne } from '../Redux/features/Point/point';
import { AddOne } from '../Redux/features/Count/counter';
import { addByinput, addbyTen } from '../Redux/features/Amount/Amount';
import { Plus } from 'lucide-react'
import { useState } from 'react';

export default function Counter() {
    let [num, setNum] = useState(0)
    let data = useSelector((store) => {
        return store?.userReducer;
    });

    let amntData = useSelector((store) => {
        return store?.userReducer1
    })

    let pointData = useSelector((store) => {
        return store?.userReducer2
    })

    const addSum = () => {
        dispatch(addByinput(num))
        setNum('')
    }
    const dispatch = useDispatch()

    return (
        <>
            <div style={{ height: '50vh', width: '100%', backgroundColor: 'lightcyan', alignItems: 'center' }} className='d-flex justify-content-center gap-5'>
                <div>
                    <h1>Count is {data.count}</h1>
                    <Button onClick={() => dispatch(AddOne())}>Inc On Amount</Button>
                </div>

                <div>
                    <div className='d-flex'>
                        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
                        <Plus
                            role='button'
                            onClick={() => addSum()}
                        />
                    </div>
                    <h1>Amount is {amntData.amount}</h1>
                    <Button onClick={() => dispatch(addbyTen(amntData))}>Add 10</Button>
                </div>

                <div>
                    <h1>Point is {pointData.point}</h1>
                    <Button onClick={() => dispatch(addOne())}>Add</Button>
                </div>
            </div>
        </>
    )
}
