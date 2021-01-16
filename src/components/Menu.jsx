

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Menu extends Component {
    render() {
        return (
            <Navbar className="justify-content-center" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" activeKey={this.props.activekey}>

                        <Nav.Link href="/">Home</Nav.Link>

                        <NavDropdown title="Software" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/utb">Ultimate Twitch Bot</NavDropdown.Item>
                            <NavDropdown.Item href="/demos/seasons">Seasons - Example</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/blog">Blog</Nav.Link>

                        <Nav.Link href="https://discordapp.com/invite/0oYgnrbPAnSym5s5">Discord</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Menu;
