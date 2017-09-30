import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';


import './Dashboard.css';

const DashboardHome = (props) => <h2>Dashboard Home</h2>;

const Dashboard = (props) => {
  return (
    <div>
      <Nav bsStyle="tabs" activeKey={1}>
        <LinkContainer to="/dashboard/overview">
          <NavItem eventKey={1}>Overview</NavItem>
        </LinkContainer>
        <NavItem eventKey={2} title="Item">Groups</NavItem>
      </Nav>

      <Switch>
        <Route path="/dashboard/overview" component={DashboardHome} />
      </Switch>
    </div>
  );
};

export default Dashboard;
