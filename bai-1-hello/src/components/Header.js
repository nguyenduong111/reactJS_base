
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

// class Header extends Component {
//     render() {
    const Header = (props) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
      
            return (
            <div className="header">
                <div>
                <Navbar color="dark" light expand="md" style={{padding:"10px"}}>
                    <NavbarBrand style={{color:"rgb(256,256,256)"}} href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="justify-content-between" >
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink style={{color:"rgb(256,256,256)"}} href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{color:"rgb(256,256,256)"}} href="https://github.com/nguyenduong111">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{color:"rgb(256,256,256)"}} nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu style={{backgroundColor: "#c1c1c1"}} right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <form className="d-flex ">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </Collapse>
                </Navbar>
                </div>
            </div>
        );
    }

export default Header;