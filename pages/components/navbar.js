import React from 'react';
import { Button, Container, Form, FormControl, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';



const Nabar = () => {
    return (
        <div className='miniNav'>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Servis</Nav.Link>
                                <Nav.Link href="#action2">Project</Nav.Link>
                                <Nav.Link href="#action2">About</Nav.Link>
                               
                            </Nav>
                           
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nabar;