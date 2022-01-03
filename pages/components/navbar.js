import Link from 'next/link';
import React from 'react';
import { Container, Nav, Offcanvas } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import ComponentsW from '../../styleW/componentsW'
import { AiFillHome } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';









const Nabar = () => {
    return (
        <ComponentsW>
            <Navbar  expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className='btn tugma'/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 ff" >
                                <Nav.Link  href='/'>
                                    <a className='navbar-brand'>
                                        <span className='logoMobile'><AiFillHome /> </span>
                                       Asosiy
                                    </a>
                                </Nav.Link>
                                 <Nav.Link  href='/'>
                                    <a className='navbar-brand'>
                                        <span className='logoMobile'><MdCall /> </span>
                                        Kontakt
                                    </a>
                                </Nav.Link>
                                <Nav.Link href='/'>
                                    <a className='navbar-brand'>
                                        <span className='logoMobile'><BsPeopleFill /> </span>
                                        Biz haqimizda
                                    </a>
                                </Nav.Link>
                                <Nav.Link href='/buy'>
                                    <a className='navbar-brand'>
                                        <span className='logoMobile'><FaShoppingCart /> </span>
                                        Sotib olish
                                    </a>
                                </Nav.Link>
                               
                              
                               
                            </Nav>
                           
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </ComponentsW>
    )
}

export default Nabar;