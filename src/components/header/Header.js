import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Header.css';

const Header = () => (
    <Navbar>
         <Navbar.Header>
            <Navbar.Brand>
                <h1>Firegroups</h1>
            </Navbar.Brand>
         </Navbar.Header>
    </Navbar>
);

export default Header;