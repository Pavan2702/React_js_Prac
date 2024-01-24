import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';


export default function Singlepage() {
  const [product, setproduct] = useState([])
  const urlData = useParams()
  const navigate = useNavigate()
  const redirect = (e) => {
    navigate(-1)
  }
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${urlData.id}`,
    }).then((res) => {
      console.log("=====>", res.data);
      setproduct(res?.data)
    }).catch((err) => {
      console.log("error-->", err)
    })
  }, [])

  return (
    <>
    <Button onClick={redirect}>Go Back</Button>
      <div className='d-flex gap-2 w-75'>
        <img className='w-25' src={product.image} alt='' />
        <div className='w-75'>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h4>{product.price}$</h4>
        </div>
      </div>
    </>
  )
}

/* axios({

    })
 */