import axios from 'axios'
import { ArchiveRestore, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'reactstrap'

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
        <Button>Add Data</Button>
            <Table dark>
                <thead>

                    <tr>
                        <th>Sr.No</th>
                        <th>Action</th>
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
                </thead>
                <tbody>

                    {
                        data.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <Trash2
                                            role='button'
                                            onClick={() => deleteData(e._id)}
                                        />
                                        <ArchiveRestore
                                        role='button'
                                        onClick={() => updatedata(e)}
                                        />
                                    </td>
                                    <td>{e.title}</td>
                                    <td>
                                        <div
                                            style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "150px" }}
                                        >
                                            {e.description}
                                        </div>
                                    </td>
                                    <td>{e.brand}</td>
                                    <td>{e.gender}</td>
                                    <td>{e.price}</td>
                                    <td>{e.discountPercentage}</td>
                                    <td>{e.category}</td>
                                    <td>{e.color.join(', ')}</td>
                                    <td>{e.size.join('-')}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table >
        </>
    )
}
