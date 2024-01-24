import React, { useState } from 'react'
import { FormGroup, Input, Label, Button, Table } from 'reactstrap'

export default function FormValidation() {
    let [digit, setDigit] = useState("")
    const [spelling, setSpelling] = useState("")
    let [userArr, setUserArr] = useState([{ digit: 10, spelling: "ten" }])


    const getData = (element) => {
        setDigit(element.target.value)
    }
    const getSpelling = (ele) => {
        setSpelling(ele.target.value)

    }
    function addToArr() {
        setUserArr([...userArr, { digit, spelling }])
        setDigit("")
        setSpelling("")

    }

    return (
        <>
            <form action="" className='border border-dark p-3 w-25 m-auto'>
                <FormGroup>
                    <Label for="exampleEmail">digit</Label>
                    <Input value={digit} type="text" name="email" id="exampleEmail" placeholder="" onChange={(e) => getData(e)} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">spelling</Label>
                    <Input value={spelling} type="text" name="text" id="examplePassword" placeholder="" onChange={(e) => getSpelling(e)} />
                </FormGroup>
                <Button color='danger' className='w-100' onClick={() => addToArr()}>Submit</Button>
            </form>
            <Table dark>
                <thead>
                    <tr>
                        <th>Sr. NO</th>
                        <th>spelling</th>
                        <th>Digit</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        userArr.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1} </td>
                                    <td>{e.spelling} </td>
                                    <td>{e.digit} </td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </Table>


        </>
    )
}
