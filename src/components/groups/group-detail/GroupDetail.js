import React from 'react';

import './GroupDetail.css';

const GroupDetail = ({ match }) => (
  <div>
    <h1>Detail: {match.params.id}</h1>
  </div>
);

export default GroupDetail;
