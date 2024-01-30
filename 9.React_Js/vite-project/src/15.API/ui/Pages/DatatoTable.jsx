import { ArchiveRestore, Edit, Space, Trash2, Trash2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'reactstrap'
const sizeArr = ["41", "42", "43", "44 ", "45"]
export default function DatatoTable({ toggle, productData, editHandler, deleteHandler }) {

    let [tabledata, setTableData] = useState(productData)

    useEffect(() => {
        setTableData(productData)
    }, [productData])

    return (
        <>
            <div>
                <div className='d-flex justify-content-end pb-3 pe-5'>
                    <Button style={{ backgroundColor: "#6fcdff", color: "black" }} onClick={toggle}>Add Product</Button>
                </div>
                <div>
                    <Table
                        borderless
                        hover
                        responsive
                        size="sm"
                        striped
                    >
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Action</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Brand Name</th>
                                <th>Gender</th>
                                <th>Price</th>
                                <th>Discount Per</th>
                                <th>Final Price</th>
                                <th>Category</th>
                                <th>Color</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                tabledata.map((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <Edit onClick={() => editHandler(e)} role='button' />
                                                <Trash2Icon role='button' onClick={() => deleteHandler(e._id)} />
                                            </td>
                                            <td>
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
                                            <td>{(e.price * e.discountPercentage / 100).toFixed(2)}</td>
                                            <td>{e.category}</td>
                                            {/* <td>
                                                {
                                                    e.color.map((e) => {
                                                        <div
                                                            style={{
                                                                height:"10px",
                                                                width:"20px",
                                                                backgroundColor:e
                                                            }}
                                                        >
                                                            <p>{e.color}</p>
                                                        </div>
                                                    })
                                                }
                                            </td> */}
                                            <td>
                                                <div style={{
                                                    display:'flex',
                                                    justifyContent:"space-around"
                                                }}>
                                                    {e.color.map((color, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                height: "10px",
                                                                width: "10px",
                                                                borderRadius: "50%",
                                                                backgroundColor: color
                                                            }}
                                                        >
                                                            <p>{color}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>

                                            <td className='d-flex align-items-center gap-2'>{
                                                sizeArr.map((ele, i) => {
                                                    return (<div key={i}
                                                        style={{
                                                            color: e.size.find((e) => e === ele) ? "black" : "lightgray",
                                                        }}
                                                    >
                                                        {ele}
                                                    </div>)
                                                })
                                            }
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div >
        </>
    )
}