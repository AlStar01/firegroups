import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './GroupCreate.css';

const GroupCreate = (props) => (
  <div>
    <h1>Create group</h1>
  </div>
);

export default withRouter(connect()(GroupCreate));
