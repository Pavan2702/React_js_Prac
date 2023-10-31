// import { PlayCircle } from 'lucide-react'
import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        {/* {
        ["content","main-content","content"].map((e)=>{
         return( <div className="div1">{e}
         </div>
          );
        })
      } */}
        <div className="head">
          <div className="text">
            <p className='p1'>Trending Landing Page Collections with Gatsby JS</p><br />
          </div>
          <div className="text-2">
            <p className='p2'>Welcome to Superprops - the leading landing page templates, built with React, Gatsby JS & Styled Components. No jQuery!</p>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center btn">
          <Button className='btn1 m-5'>Purchase Now</Button>
        </div >
        </div>
        )
      }
}
