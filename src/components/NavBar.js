import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Cart, PersonFill } from 'react-bootstrap-icons';
import React from 'react';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" style={{ height: '54px' }}>
            <Container fluid style={{ justifyContent: 'space-evenly', backgroundColor: 'inherit', backgroundColor: 'cadetblue' }}>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Brand href="/" style={{ width: '20%', display: 'flex', justifyContent: 'center' }}>
                    <strong>售票系統</strong>
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px', width: '100%', display: 'flex', justifyContent: 'flex-end' }}
                        navbarScroll
                    >
                        <Form className="d-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="關鍵字"
                                style={{ width: '70%' }}
                            />
                            <Button size='sm' variant="outline-success" style={{ width: '25%' }}>搜尋</Button>
                        </Form>

                        <Form className="d-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ margin: '12px' }}>
                                <Cart size={24} />
                            </div>
                            <div style={{ margin: '12px' }}>
                                <PersonFill size={24} />
                            </div>
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;