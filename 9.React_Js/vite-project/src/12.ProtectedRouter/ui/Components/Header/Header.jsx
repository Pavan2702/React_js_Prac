import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

import './Header.css'; // You need to import your CSS file
import { NavLink, useNavigate } from 'react-router-dom';
import Register from '../Modal/Register';
import Login from '../Modal/Login';
import { CircleUser } from 'lucide-react';
// import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [regmodal, setRegmodal] = useState(false);

  const Regtoggle = () => setRegmodal(!regmodal);

  const [loginmodal, setLoginmodal] = useState(false);

  const Logtoggle = (() => {
    setLoginmodal(!loginmodal)
    toggle()
  });

  const data = JSON.parse(localStorage.getItem("LoginData")) || [];
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.setItem("LoginData", JSON.stringify([]));
    navigate("/");
    setLoginmodal(true);
    toggle()
  };


  return (
    <>
      <header className='head'>
        <Register modal={regmodal} toggle={Regtoggle} />
        <Login modal={loginmodal} toggle={Logtoggle} registertologin={Regtoggle} />

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
              {data.usertype === "ad min" ?
                (
                  <NavItem>
                    <NavLink to={"/admin"} onClick={toggle}>Admin</NavLink>
                  </NavItem>
                ) : (null)
              }
              <NavItem>
                {/* <NavLink to="/contact" onClick={toggle}>Contact us</NavLink> */}
              </NavItem>
            </Nav>
            <Nav className="m-auto" navbar>

              {data && Object.keys(data).length > 0 ?
                (<NavItem>
                  <Button onClick={logoutHandler}>Log Out</Button>
                </NavItem>)
                :
                (<NavItem>
                  <Button onClick={Logtoggle}>Log in</Button>
                </NavItem>)
              }
              <NavItem className='icons'>
                <NavLink to={"/profile"} onClick={toggle}> <CircleUser /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </>
  );
};
