import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CardWidget } from '../cardWidget,js/CardWidget';


export const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Camisas Shop</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Acerca de Nosotros</Nav.Link>
                <Nav.Link href="#pricing">Contactanos</Nav.Link>
            </Nav>
            <CardWidget />
            </Container>
        </Navbar>
        </>
    );
}
