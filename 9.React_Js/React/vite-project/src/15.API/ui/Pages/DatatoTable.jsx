import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

export default function DatatoTable() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: ("http://localhost:9999/product/getAll")
        }).then((res) => {
            console.log("==========>", res.data.data)
            setData(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <Table>

                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Brand Name</th>
                    <th>Gender</th>
                    <th>Price</th>
                    <th>Discount Percentage</th>
                    <th>Category</th>
                    <th>Color</th>
                    <th>Size</th>
                </tr>

                {
                    data.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{e.title}</td>
                                <td>{e.description}</td>
                                <td>{e.brand}</td>
                                <td>{e.gender}</td>
                                <td>{e.price}</td>
                                <td>{e.discountPercentage}</td>
                                <td>{e.category}</td>
                                <td>{e.color}</td>
                                <td>{e.size.join('-')}</td>
                            </tr>
                        )
                    })
                }
            </Table>
            {/* <h1>hii</h1> */}

        </>
    )
}
