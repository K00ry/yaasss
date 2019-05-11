import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import { Link} from 'react-scroll';

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
                        <Link to="music" spy={true} smooth={true} offset={-50} duration={1500}><Nav.Link href="#">MUSIC</Nav.Link></Link>
                        <Link to="about" spy={true} smooth={true} offset={-50} duration={1500}><Nav.Link href="#">ABOUT ZADDY'Z</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Toolbar;



