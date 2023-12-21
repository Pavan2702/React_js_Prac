import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import './Header.css'; // You need to import your CSS file
import { NavLink } from 'react-router-dom';
import Register from '../Modal/Register';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [regmodal, setRegmodal] = useState(false);

  const Regtoggle = () => setRegmodal(!regmodal);


  return (
    <>
      {/* Header */}
      <header>
<Register modal={regmodal} toggle={Regtoggle}/>

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
              <NavItem>
                <Button>Log In</Button>
              </NavItem>
              <NavItem>
                <Button>Log In</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>


    </>
  );
};


