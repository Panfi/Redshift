import React from 'react';
import logo from '../../assets/images/logo.png';
import './header.css';
import {
    Container,
    Collapse,
    Col,
    Row,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


function Header() {
    return (
        <header>
            <Container fluid className="header">
            <Navbar color="black" black expand="md">
                <Container>
                    <NavbarBrand href="/"><img src={logo} width="250" alt="" /></NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </Container>
        </header>
        
    );
}

export default Header;
