import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Button, Panel, Row, Col } from 'react-bootstrap';

import './Login.css';

import { requestLogin } from '../../../actions/auth';

const Login = (props) => {
  const handleClick = () => props.dispatch(requestLogin());

  const { from } = props.location.state || { from: { pathname: '/' } };
  const { isAuthenticated } = props.auth;

  if(isAuthenticated) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <Row>
      <Col sm={4} smOffset={4}>
        <Panel header="Sign in">
          <Button className="btn-icon center-block" block onClick={handleClick}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
            Sign in with Google
          </Button>
        </Panel>
      </Col>
    </Row>
  );
};

function mapStateToProps(state) {
  const { auth } = state;

  return {
    auth
  };
}

export default withRouter(connect(mapStateToProps)(Login));
