import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = (props) => {
  const { auth: { isAuthenticated } } = props;

  const handleClick = () => {
    props.dispatch({ type: 'REQUEST_LOGIN' });
  };

  return (
    isAuthenticated ? (
      <Redirect to="/groups" />
    ) : (
      <Button bsStyle="primary" onClick={handleClick}>Login with Google</Button>
    )
  );
};

function mapStateToProps(state) {
  const { auth } = state;

  return {
    auth
  };
}

export default withRouter(connect(mapStateToProps)(Login));
