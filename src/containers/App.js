import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from '../components/header/Header';
import Groups from '../components/groups/Groups';
import Home from '../components/home/Home';
import Login from '../components/account/login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Grid>
          <Row>
            <Col sm={12}>
              <Route exact path="/" component={Home} />
              <Route path="/groups" component={Groups} />
              <Route path="/login" component={Login} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
