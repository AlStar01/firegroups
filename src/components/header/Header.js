import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  const { isAuthenticated } = props.auth;
  console.log('props: ', props);

  const handleClick = () => props.dispatch({ type: 'REQUEST_LOGOUT' });

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
              <NavItem eventKey={2}>Groups</NavItem>
            </LinkContainer>
            {!isAuthenticated ? (
              <LinkContainer to="/login">
                <NavItem eventKey={3}>Login</NavItem>
              </LinkContainer>
              ) : (
                <NavDropdown eventKey={4} title="Account" id="account-nav-dropdown">
                  <MenuItem eventKey={4.1}>My account</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.2} onClick={handleClick}>Logout</MenuItem>
                </NavDropdown>
              )
            }
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
