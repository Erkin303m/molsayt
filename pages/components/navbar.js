import Link from 'next/link';
import React from 'react';
import { Container, Nav, Offcanvas } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';



const Nabar = () => {
    return (
        <div className='miniNav'>
            <Navbar  expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className='btn btn-light'/>
                    {/* <button className='btn btn-light'>Dashboard</button> */}
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link  href='/'>
                                    <a className='headerMenu'>
                                        Asosiy
                                    </a>
                                </Nav.Link>
                                 <Nav.Link  href='/'>
                                    <a className='headerMenu'>
                                        Kontakt
                                    </a>
                                </Nav.Link>
                                <Nav.Link href='/'>
                                    <a className='headerMenu'>
                                        About us
                                    </a>
                                </Nav.Link>
                                <Nav.Link href='/buy'>
                                    <a className='headerMenu'>
                                        Buy
                                    </a>
                                </Nav.Link>
                               
                              
                               
                            </Nav>
                           
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nabar;