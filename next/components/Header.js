import React from 'react'
import Link from 'next/link'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'; 



const Header = () => (
    <div>
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Insure Way</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="/payments_insurance">Payments and Insurance Types</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/login">Log in</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
    </div>
    
)

export default Header ;