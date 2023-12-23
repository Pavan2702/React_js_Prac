
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col, Row } from 'reactstrap';

export default function Login({ modal, toggle }) {
    let [loginuser, setLoginuser] = useState({
        email: "",
        password: "",
    })


    function submitBtn() {
        if (loginuser.email == "" && loginuser.password == "")
            alert("Fill this field first")
        else { loginuser }

        let LogInData =  localStorage.setItem("loginarray", JSON.stringify({ loginuser }))

        let LogData = JSON.parse({LogInData})
        console.log("🚀 ~ file: Login.jsx:20 ~ submitBtn ~ LogData:", LogData)

        // let OldData = JSON.parse(localStorage.getItem("dataarray"))

        // if (LoginData === OldData ) {
        //     console.log("Log in");
        // }

        // on click input in his initial state
        setLoginuser({
            email: "",
            password: "",
        })
        toggle()
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
                                        value={loginuser?.email}
                                        placeholder="with a placeholder"
                                        type="email"
                                        onChange={(e) => setLoginuser({ ...loginuser, email: e?.target?.value })}
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
                                        value={loginuser?.password}
                                        placeholder="password placeholder"
                                        type="password"
                                        onChange={(e) => setLoginuser({ ...loginuser, password: e?.target?.value })}
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
