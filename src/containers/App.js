import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from '../components/header/Header';
import GroupsList from '../components/groups/groups-list/GroupsList';
import Home from '../components/home/Home';
import Login from '../components/account/login/Login';
import Dashboard from '../components/account/dashboard/Dashboard';

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
                <Route path="/groups" component={GroupsList} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
