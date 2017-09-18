import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  console.log('props: ', props);

  return (
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
            <LinkContainer to="/login">
              <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
          </Nav>
         </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps(state) {
  const { auth } = state;

  return {
    auth
  }
}

export default withRouter(connect(mapStateToProps)(Header));
