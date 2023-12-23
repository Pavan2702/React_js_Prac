import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import './Header.css'; // You need to import your CSS file
import { NavLink, useNavigate } from 'react-router-dom';
import Register from '../Modal/Register';
import Login from '../Modal/Login';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [regmodal, setRegmodal] = useState(false);

  const Regtoggle = () => setRegmodal(!regmodal);

  const [loginmodal, setLoginmodal] = useState(false);

  const Logtoggle = () => setLoginmodal(!loginmodal);

  const data = JSON.parse(localStorage.getItem("LoginData")) || [];
  // console.log("🚀 ~ file: Header.jsx:22 ~ Header ~ data:", data)
  // const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.setItem("LoginData", JSON.stringify([]));
    // navigate("/");
    setLoginmodal(true);
    toggle()
  };


  return (
    <>
      {/* Header */}
      <header>
        <Register modal={regmodal} toggle={Regtoggle} />
        <Login modal={loginmodal} toggle={Logtoggle} />

        <Navbar color="light" light expand="lg">
          <NavbarBrand href="/">FOODies</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto link" navbar>
              <NavItem>
                <NavLink to={"/"} onClick={toggle}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/about"} onClick={toggle}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/admin"} onClick={toggle}>Admin</NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink to="/contact" onClick={toggle}>Contact us</NavLink> */}
              </NavItem>
            </Nav>
            <Nav className="m-auto" navbar>
              <NavItem>
                <Button onClick={Regtoggle}>Register</Button>
              </NavItem>

              {data && Object.keys(data).length > 0 ?
                (<NavItem>
                  <Button onClick={logoutHandler}>Log Out</Button>
                </NavItem>)
                :
                (<NavItem>
                  <Button onClick={Logtoggle}>Log in</Button>
                </NavItem>)
              }
            </Nav>
          </Collapse>
        </Navbar>
      </header>


    </>
  );
};


