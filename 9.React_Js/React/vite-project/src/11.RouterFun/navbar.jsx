import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import "./navbar.css"
import { NavLink } from 'react-router-dom';

export default () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='container'>
            <Navbar expand="lg">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className='d-flex m-auto'>
                    <Nav className="me-auto Navlink d-flex gap-3" navbar>
                        <NavItem>
                            <NavLink to={"/"}>Home</NavLink>{" "}
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/service"}>Service</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/contact"}>Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/product"}>Product</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

