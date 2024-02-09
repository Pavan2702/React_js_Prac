import { ArrowDown, Edit, Plus, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { addValue, deleteVal, updateValue } from '../Redux/features/Input/inputValue'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'reactstrap'

export default function Data() {
    let [value, setValue] = useState("")

    let data = useSelector((store) => {
        return store?.userReducer3.inputValue;
    });

    const addVal = () => {
        dispatch(addValue(value))
        setValue('')
    }

    const deletedata = (i) => {
        dispatch(deleteVal(i))
    }

    const updatedata = (e, i) => {
        setValue(e)
    }
    const updatedata1 = () => {
        dispatch(updateValue(value))
    }

    const dispatch = useDispatch()
    return (
        <>
            <div style={{ height: '30vh', width: '100%', backgroundColor: 'lightgreen', alignItems: 'center' }} className='d-grid justify-content-center'>
                <div className='d-flex'>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <Plus
                        style={{
                            backgroundColor: 'white',
                            border: '1px solid black'
                        }}
                        role='button'
                        onClick={() => addVal()}
                    />
                    <ArrowDown
                        style={{
                            backgroundColor: 'white',

                        }}
                        role='button'
                        onClick={() => updatedata1()}
                    />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <Table
                    bordered
                    dark
                    striped
                    className='w-75'
                    // size='m'
                >
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Data
                            </th>
                            <th>
                                Delete
                            </th>
                            <th>
                                Update
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e}</td>
                                    <td><Trash
                                        role='button'
                                        onClick={() => { deletedata(i) }}
                                    /></td>
                                    <td><Edit
                                        role='button'
                                        onClick={() => { updatedata(e, i) }}
                                    /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>


            </div>
        </>
    )
}
