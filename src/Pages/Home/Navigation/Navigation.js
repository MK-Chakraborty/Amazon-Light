import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Container fluid className="px-0">
            <Navbar variant="dark" bg="dark" expand="lg" className="bg-gradient">
                <Container>
                    <NavLink to="/" className="text-decoration-none"><h2 className="text-light"><span className="fs-3 text-warning"><i className="fab fa-amazon"></i></span>mazon</h2></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/dashboard" className="text-decoration-none"><h6 className="pt-3 pb-1 pe-2"><i className="far fa-user-circle text-warning fs-4"></i></h6></NavLink>
                            <NavLink to="/" className="text-decoration-none"><h6 className="text-light pt-3 pb-1 px-2">Home</h6></NavLink>
                            <NavLink to="/products" className="text-decoration-none"><h6 className="text-light pt-3 pb-1 px-2">Products</h6></NavLink>
                            <NavLink to="/login" className="text-decoration-none"><h6 className="text-warning pt-3 pb-1 ps-2">Log In</h6></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigation;