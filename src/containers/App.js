import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from '../components/header/Header';
import Groups from '../components/groups/Groups';

class App extends Component {
  render() {
    const { isFetching, groups } = this.props;

    return (
      <div className="App">
        <Header />

        <Grid>
          <Row>
            <Col sm={12}>
              {isFetching && groups.length === 0 &&
                <div>Loading...</div>
              }

              <Groups groups={groups} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { groups: { isFetching, items: groups } } = state;
  return { isFetching, groups };
}

export default connect(mapStateToProps)(App);
