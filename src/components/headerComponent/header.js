import React from 'react';
import './header.css';
import {
    Container,
    Collapse,
    Col,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


function Header() {
    return (
        <Container fluid>
            <Navbar color="black" black expand="md">
                <Container>
                    <NavbarBrand href="/">Redshift</NavbarBrand>
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
        <Container fluid>
            <Col md="8">
            
            </Col>
            <Col md="4">
            
            </Col>
        </Container>
        
    );
}

export default Header;
