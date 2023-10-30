import React, { useState } from 'react'
import Marquee from 'react-fast-marquee';
import {Button} from 'reactstrap'
import './App1.css'


export default function UseStateFun() {

    let [index,setIndex]=useState(0)

    function increment(){
        setIndex(index+1)
    }

  return (
    <>
    <div className="mtag">
    <Marquee className='marq'>
      Increment Decrement state change by Button click
    </Marquee>
    </div>
    <h1 className='m-5 index'>{index}</h1>
    <div className='d-flex gap-5'>
    <Button color='dark p-2' onClick={()=>increment()}>Increment</Button>
    <Button color='dark p-2' onClick={()=>setIndex(index-1)}>Deccrement</Button>
    </div><br />
    <Button color='dark p-2' onClick={()=>setIndex(0)}>Reset</Button>
  

    </>
  );
}
