import React from 'react';
import { Button, NavDropdown, Navbar, Form, FormControl,Nav } from 'react-bootstrap';



const CustomNav = () =>{

    const cerrarSesion = () =>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
    }

        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Alexandria</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/books/new">Agregar Libro</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login" onClick={cerrarSesion}>Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    
}

export default CustomNav;