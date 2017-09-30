import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      rest.auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
    )} />
  );

function mapStateToProps(state) {
  const { auth } = state;

  return {
    auth
  };
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));
