import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function FormValidationTask() {
    let [digit, setDigit] = useState("")
    let [spelling, setSpelling] = useState("")
    let [array, setArray] = useState([])

    const getDigit = ((element) => {
        setDigit(element.target.value)
    })
    const getSpelling = ((ele) => {
        setSpelling(ele.target.value)
    })

    function addToArray() {
        if (digit === "" || digit === null || spelling === "" || spelling === null) {
            alert("Please Fill Data")
        } else {
            setArray([...array, { digit, spelling }])

        }
        setDigit("")
        setSpelling("")
    }

    function removeAll() {
        if (confirm("Are you sure you want to delete all entries?")){
            if (confirm("Are you sure you want to delete all entries?")){
                setArray([])
            }
        }
    }

    return (
        <>
            <Form action="" className='border border-dark p-3 w-25 m-auto'>
                <FormGroup>
                    <Label for="exampleText" style={{ fontWeight: 'bold' }}>Digit</Label>
                    <Input value={digit} type="text" name="text" id="exampleText" onChange={(e) => getDigit(e)} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSpelling" style={{ fontWeight: 'bold' }}>Spelling</Label>
                    <Input value={spelling} type="text" name="text1" id="exampleSpelling" onChange={(e) => getSpelling(e)} />
                </FormGroup> 
                <Button color='warning' className='w-100' onClick={() => addToArray()}>Submit</Button>
                <Button color='warning' className='w-100' onClick={() => removeAll()}>Delete All</Button>
            </Form>

            <Table dark>
                <thead>
                    <tr>
                        <th>sr</th>
                        <th>Digit</th>
                        <th>Spelling</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        array.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{e.digit}</td>
                                    <td>{e.spelling}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
