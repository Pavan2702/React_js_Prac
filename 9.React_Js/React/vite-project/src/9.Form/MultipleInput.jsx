import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { PenSquare, Trash2 } from 'lucide-react'

export default function MultipleInput() {
    let [user, setUser] = useState({
        name: "",
        surname: "",
        age: "",
        email: "",
        password: "",
    })
    const [array, setArray] = useState([])
    const [updateMode, setUpdateMode] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);
    let [searchText, setsearchText] = useState("")

    useEffect(() => {
        let jsonStr = localStorage?.getItem("dataArray")
        let normalData = JSON.parse(jsonStr) || []
        // setArray(normalData)
        let searchdata = normalData?.filter((e) =>
        e?.email.toLowerCase().includes(searchText.toLowerCase()) || e?.age?.includes(searchText)
    );
        setArray(searchdata)
    }, [searchText])
    function onSubmit() {

        if (user.email == "" && user.password == "") {
            alert("please fill this field")
        }
        else {
            setArray([...array, user])
        }
        localStorage.setItem("dataArray", JSON.stringify([...array, user]))
        setUser({
            name: "",
            surname: "",
            age: "",
            email: "",
            password: "",
        })
    }

    function removeAll() {
        if (confirm("Are you sure you want to delete all entries?")) {
            if (confirm("Are you sure you want to delete all entries?")) {
                setArray([])
            }
        }
    }
    function deletItem(index) {
        let filterdData = array?.filter((e, i) => i !== index);
        setArray(filterdData);
        localStorage.setItem("dataArray", JSON.stringify(filterdData))
    }
    function updateHandler(data, index) {
        setUser(data);
        setUpdateIndex(index);
        setUpdateMode(true);
    }
    function handleUpdate() {
        if (updateIndex !== null) {
            const updatedArray = [...array];
            updatedArray[updateIndex] = user;
            setArray(updatedArray);
            localStorage.setItem("dataArray", JSON.stringify(updatedArray))
            setUpdateMode(false);
            setUpdateIndex(null);
            setUser({
                name: "",
                surname: "",
                age: "",
                email: "",
                password: "",
            });
        }
    }
    return (
        <>
            <div className='border border-dark p-3 w-50 m-auto'>
                <Form action="" >
                    <FormGroup>
                        <Label for="name" style={{ fontWeight: 'bold' }}>Enter Your Nmae</Label>
                        <Input value={user?.name} type="text" name="name1" id="name1" onChange={(e) => setUser({ ...user, name: e.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname" style={{ fontWeight: 'bold' }}>Enter Your Surnmae</Label>
                        <Input value={user?.surname} type="text" name="surname" id="surname" onChange={(e) => setUser({ ...user, surname: e.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age" style={{ fontWeight: 'bold' }}>Enter Your Age</Label>
                        <Input value={user?.age} type="text" name="age" id="age" onChange={(e) => setUser({ ...user, age: e.target?.value })} />
                    </FormGroup><FormGroup>
                        <Label for="email" style={{ fontWeight: 'bold' }}>Enter Your Email Id</Label>
                        <Input value={user?.email} type="text" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target?.value })} />
                    </FormGroup><FormGroup>
                        <Label for="password" style={{ fontWeight: 'bold' }}>Enter Your Password</Label>
                        <Input value={user?.password} type="text" name="password" id="password" onChange={(e) => setUser({ ...user, password: e.target?.value })} />
                    </FormGroup>
                    <Button color='warning' className='w-100' onClick={updateMode ? handleUpdate : onSubmit}>
                        {updateMode ? 'Update' : 'Submit'}
                    </Button>
                    <Button color='warning' className='w-100 mt-3' onClick={() => removeAll()}>Delete All</Button>
                </Form>
            </div>
                <input className='m-auto' type="text" placeholder='Search here' onChange={(e) => setsearchText(e.target?.value)} />

            <div className='pt-3'>

                <Table dark>
                    <thead>
                        <tr>

                            <th>sr</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array?.length === 0 ? (
                            <tr>
                                <td colSpan="8" style={{ textAlign: "center" }}>
                                    Data not found
                                </td>
                            </tr>
                        ) : (

                            array?.map((e, i) => {
                                return (

                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{e?.name}</td>
                                        <td>{e?.surname}</td>
                                        <td>{e?.age}</td>
                                        <td>{e?.email}</td>
                                        <td>{e?.password}</td>
                                        <td>
                                            <Trash2
                                                role='button'
                                                onClick={() => deletItem(i)} />
                                        </td>
                                        <td>
                                            <PenSquare
                                                role='button'
                                                onClick={() => updateHandler(e, i)} />
                                        </td>
                                    </tr>
                                )
                            })

                        )
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}