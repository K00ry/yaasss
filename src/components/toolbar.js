import React from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";


const Toolbar = () => {
    return (
        <Navbar collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">YAASSS</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        ABOUT ZADDY'Z
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        MUSIC
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        SHOWS
                    </NavItem>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Toolbar;