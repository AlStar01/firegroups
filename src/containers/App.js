import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import PrivateRoute from '../components/account/PrivateRoute';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Login from '../components/account/login/Login';
import Dashboard from '../components/account/dashboard/Dashboard';

import GroupList from '../components/groups/group-list/GroupList';
import GroupDetail from '../components/groups/group-detail/GroupDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Grid>
          <Row>
            <Col sm={12}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/groups/:id" component={GroupDetail} />
                <PrivateRoute path="/groups" component={GroupList} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
              </Switch>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
