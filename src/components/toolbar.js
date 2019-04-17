import React from 'react';
import {Nav, Navbar} from "react-bootstrap";


const Toolbar = () => {
    return (

        <Navbar collapseOnSelect expand="lg"  >
        <Navbar.Brand href="#home">YAASSS</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <Nav>
            <Nav.Link href="#features">ABOUT ZADDY'Z</Nav.Link>
            <Nav.Link href="#pricing">MUSIC</Nav.Link>
            <Nav.Link href="#deets">SHOWS</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
    );
};

export default Toolbar;



