import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = props => {
    const onTabClickNavHandler = (tab) => {
        props.onActiveTab(tab);
    }

    return (
        <Navbar bg="light" expand="lg" text="white">
            <Navbar.Brand href="/"><b>WATTx Top Coins</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">
                        <b>Market Overview</b>
                    </Nav.Link>
                    <Nav.Link onClick={() => onTabClickNavHandler('tab2')}>
                        <b>Liquidity Analysis</b>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;