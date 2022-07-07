import React from "react";
import { MainSlider } from './MainSlider'
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { MainNavBar } from './MainNavBar'

function Main() {
    return (
        <div style={{ width: '100%', display: 'block' }}>
            <MainSlider />
            <MainNavBar />
        </div>
    )
}

export default Main;