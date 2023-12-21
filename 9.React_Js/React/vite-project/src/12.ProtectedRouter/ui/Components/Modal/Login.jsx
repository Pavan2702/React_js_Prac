
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col, Row } from 'reactstrap';

export default function Register({ modal, toggle }) {
    let [user, setUser] = useState({
        email: "",
        password: "",
    })
    let [arr, setArr] = useState([])


    function submitBtn() {
        // console.log(user)
        if (user.email == "" && user.password == "")
            alert("Fill this field first")
        else
            setArr([...arr, user])

        localStorage.setItem("dataArray", JSON.stringify([...arr, user]))
        // console.log([...arr, user])

        // on click input in his initial state
        setUser({
            email: "",
            password: "",
        })
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        value={user?.email}
                                        placeholder="with a placeholder"
                                        type="email"
                                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        value={user?.password}
                                        placeholder="password placeholder"
                                        type="password"
                                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitBtn}>
                        Submit
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
