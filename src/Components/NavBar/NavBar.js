import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" text="white">
            <Navbar.Brand href="/"><b>WATTx Top Coins</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Market Overview</Nav.Link>
                    <Nav.Link href="/LiquidityAnalysis">
                        Liquidity Analysis
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;