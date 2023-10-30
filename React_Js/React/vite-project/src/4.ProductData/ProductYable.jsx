import React from 'react'
import product from "../../../../ProductModule/product.json"
import { Table } from "reactstrap"
    
export default function ProductYable() {
    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>SR.NO</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Color</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>

                    {product.map((e, i) => {
                        return (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{e.title}</td>
                                <td>{e.brand}</td>
                                <td>{e.category[0]}</td>
                                <td>{e.color[1]}</td>
                                <td>{e.size[e.size.length - 1]}</td>

                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}
