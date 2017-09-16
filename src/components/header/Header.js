import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
    <Navbar collapseOnSelect>
         <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Firegroups</Link>
            </Navbar.Brand>
         </Navbar.Header>
         <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/groups">
              <NavItem eventKey={1}>Groups</NavItem>
            </LinkContainer>
          </Nav>
         </Navbar.Collapse>
    </Navbar>
);

export default Header;
