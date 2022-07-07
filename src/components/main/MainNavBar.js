import React from "react";
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Image, MusicNoteBeamed, Flower2, EmojiSmileUpsideDownFill, PersonLinesFill, MicFill, CircleSquare, GraphUp, Film, Truck, ThreeDots, Bullseye } from 'react-bootstrap-icons';

function MainNavBar() {
    return (
        <Navbar bg="light" expand="lg" style={{ height: '72px' }}>
            <Container fluid style={{ justifyContent: 'space-evenly', backgroundColor: 'inherit' }}>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}
                        navbarScroll
                    >
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <Bullseye className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">總覽</font>
                            <font size="2" className="navBar-icon-text">(Overview)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <MusicNoteBeamed className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">音樂會</font>
                            <font size="2" className="navBar-icon-text">(Music)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <Flower2 className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">舞蹈</font>
                            <font size="2" className="navBar-icon-text">(Dance)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <EmojiSmileUpsideDownFill className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">戲劇</font>
                            <font size="2" className="navBar-icon-text">(Theater)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <PersonLinesFill className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">親子</font>
                            <font size="2" className="navBar-icon-text">(Family)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <MicFill className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">演唱會</font>
                            <font size="2" className="navBar-icon-text">(Concerts)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <CircleSquare className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">運動</font>
                            <font size="2" className="navBar-icon-text">(Sports)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <GraphUp className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">講座</font>
                            <font size="2" className="navBar-icon-text">(Conferences)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <Image className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">展覽</font>
                            <font size="2" className="navBar-icon-text">(Exhibitions)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <Film className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">電影</font>
                            <font size="2" className="navBar-icon-text">(Movies)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <Truck className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">旅遊</font>
                            <font size="2" className="navBar-icon-text">(Travel)</font>
                        </Nav.Link>
                        <Nav.Link href="" style={{ width: '120px', lineHeight: '36px' }}>
                            <ThreeDots className="navBar-icon" size={30} />
                            <font size="2" className="navBar-icon-text">其他</font>
                            <font size="2" className="navBar-icon-text">(Other)</font>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { MainNavBar };