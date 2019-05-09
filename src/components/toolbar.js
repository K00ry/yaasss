import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";

class Toolbar extends Component {


    render() {
        return (
            <Navbar collapseOnSelect expand="lg" fixed="top" >
                <Navbar.Brand href="#home"><img alt="camel lip logo" src={process.env.PUBLIC_URL+ "img/camel-lip-logo.png"}/></Navbar.Brand>
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
    }
}

export default Toolbar;



