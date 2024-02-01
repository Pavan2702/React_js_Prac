import React from 'react'
import { useSelector } from 'react-redux';

export default function counter() {
    let data = useSelector((store) => {
        return store?.userReducer;
    });
    console.log("🚀 ~ data ~ data:", data)

    

    return (
        <>
            {data.count}
        </>
    )
}
