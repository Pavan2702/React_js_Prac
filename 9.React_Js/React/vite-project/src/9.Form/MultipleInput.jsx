import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Table } from 'reactstrap';
import { Eye, EyeOff, PenSquare, Trash2 } from 'lucide-react';

export default function MultipleInput() {
    let [user, setUser] = useState({
        name: '',
        surname: '',
        age: '',
        email: '',
        password: '',
        gender: '',
        hobby: []
    })
    const [array, setArray] = useState([]);
    const [updateMode, setUpdateMode] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [passIndex, setPassIndex] = useState([]);


    useEffect(() => {
        const jsonStr = localStorage?.getItem('dataArray');
        const normalData = JSON.parse(jsonStr) || [];
        const searchdata = normalData?.filter((e) =>
            e?.email.toLowerCase().includes(searchText.toLowerCase()) ||
            e?.age.includes(searchText)
        );
        setArray(searchdata);
    }, [searchText]);

    function onSubmit() {
        if (user.email === '' || user.password === '') {
            alert('Please fill in the required fields');
        } else {
            setArray([...array, user]);
        }
        localStorage.setItem('dataArray', JSON.stringify([...array, user]));
        setUser({
            name: '',
            surname: '',
            age: '',
            email: '',
            password: '',
            gender: '',
            hobby: ''
        });
    }

    function removeAll() {
        if (window.confirm('Are you sure you want to delete all entries?')) {
            if (window.confirm('Are you sure you want to delete all entries?')) {
                setArray([]);
                localStorage.removeItem('dataArray');
            }
        }
    }

    function showPassword(index) {
        setPassIndex([...passIndex, index])
    }

    function hidePassword(index) {
        const filteredData = passIndex?.filter((e, i) => i !== index);
        setPassIndex(filteredData);
    }

    function deleteItem(index) {
        const filteredData = array?.filter((e, i) => i !== index);
        setArray(filteredData);
        localStorage.setItem('dataArray', JSON.stringify(filteredData));
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
            localStorage.setItem('dataArray', JSON.stringify(updatedArray));
            setUpdateMode(false);
            setUpdateIndex(null);
            setUser({
                name: '',
                surname: '',
                age: '',
                email: '',
                password: '',
                gender :'',
                hobby: []
            })
        }
    }

    return (
        <>
            <div className="border border-dark p-3 w-50 m-auto">
                <Form>
                    <FormGroup>
                        <Label for="name" style={{ fontWeight: 'bold' }}>Enter Your Name</Label>
                        <Input
                            value={user.name}
                            type="text"
                            name="name1"
                            id="name1"
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname" style={{ fontWeight: 'bold' }}>Enter Your Surname</Label>
                        <Input
                            value={user.surname}
                            type="text"
                            name="surname"
                            id="surname"
                            onChange={(e) => setUser({ ...user, surname: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age" style={{ fontWeight: 'bold' }}>Enter Your Age</Label>
                        <Input
                            value={user.age}
                            type="text"
                            name="age"
                            id="age"
                            onChange={(e) => setUser({ ...user, age: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" style={{ fontWeight: 'bold' }}>Enter Your Email Id</Label>
                        <Input
                            value={user.email}
                            type="text"
                            name="email"
                            id="email"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" style={{ fontWeight: 'bold' }}>Enter Your Password</Label>
                        <Input
                            value={user.password}
                            type="text"
                            name="password"
                            id="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Gender</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1"
                                    value="Male"
                                    checked={user.gender === "Male"}
                                    onChange={(e) => setUser({ ...user, gender: e.target.value })}
                                />{' '}
                                Male
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1"
                                    value="Female"
                                    checked={user.gender === "Female"}
                                    onChange={(e) => setUser({ ...user, gender: e.target.value })}
                                />{' '}
                                Female
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="checkbox">Hobby</Label>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox1"
                                    value="Coding"
                                    checked={user.hobby.includes("Coding")}
                                    onChange={(e) => setUser({ ...user, hobby: [...user.hobby, e.target.value] })} />{' '}
                                Coding
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2"
                                    value="Gameing"
                                    checked={user.hobby.includes("Gameing")}
                                    onChange={(e) => setUser({ ...user, hobby: [...user.hobby, e.target.value] })} />{' '}
                                Gameing
                            </Label>
                        </FormGroup><FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox3"
                                    value="Reading a books"
                                    checked={user.hobby.includes("Reading a books")}
                                    onChange={(e) => setUser({ ...user, hobby: [...user.hobby, e.target.value] })} />{' '}
                                Reading a books
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    <Button color="warning" className="w-100" onClick={updateMode ? handleUpdate : onSubmit}>
                        {updateMode ? 'Update' : 'Submit'}
                    </Button>
                    <Button color="warning" className="w-100 mt-3" onClick={removeAll}>Delete All</Button>
                </Form>
            </div>
            <div className='d-flex justify-content-center mt-3'> 
            <input className="m-auto w-25 p-2 border border-dark border-3" type="text" placeholder="Search here" onChange={(e) => setSearchText(e.target.value)} />
            </div>

            <div className="pt-3">
                <Table dark>
                    <thead>
                        <tr>
                            <th>sr</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Show / Hide</th>
                            <th>Gender</th>
                            <th>Hobby</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array?.length === 0 ? (
                            <tr>
                                <td colSpan="11" style={{ textAlign: "center" }}>
                                    Data not found
                                </td>
                            </tr>
                        ) : (
                            array?.map((e, i) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{e.name}</td>
                                    <td>{e.surname}</td>
                                    <td>{e.age}</td>
                                    <td>{e.email}</td>
                                    <td>{passIndex?.includes(i) ? e.password : '********'}</td>
                                    <td>
                                        {passIndex.includes(i) ? (
                                            <Eye
                                                role="button"
                                                onClick={() => hidePassword(i)}
                                            />
                                        ) : (
                                            <EyeOff
                                                role="button"
                                                onClick={() => showPassword(i)}
                                            />
                                        )}
                                    </td>
                                    <td>{e.gender}</td>
                                    <td>{e.hobby.join('-')}</td>
                                    <td>
                                        <Trash2
                                            role="button"
                                            onClick={() => deleteItem(i)}
                                        />
                                    </td>
                                    <td>
                                        <PenSquare
                                            role="button"
                                            onClick={() => updateHandler(e, i)}
                                        />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
