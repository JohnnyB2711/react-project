import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

function MenuItem(props) {
    return (
        <Nav.Link href={props.href}>{props.text}</Nav.Link>
    )
}

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <MenuItem text='Top rated' href=''/>
                    <MenuItem text='Upcoming' href=''/>
                    <MenuItem text='Popular' href=''/>
                    <MenuItem text='Viewed' href=''/>
                    <MenuItem text='Planned' href=''/>
                    <NavDropdown title="Genre" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="">Action</NavDropdown.Item>
                        <NavDropdown.Item href="">Another action</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    )
}

export default Menu