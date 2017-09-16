import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Groups extends Component {
  render() {
    const { isFetching, groups } = this.props;

    return (
      <div>
        {isFetching && groups.length === 0 &&
          <div>Loading...</div>
        }

        {!isFetching && groups.length > 0 &&
          <ul>
            {groups.map(group => <li key={group.id}>{group.name}</li>)}
          </ul>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { groups: { isFetching, items: groups }} = state;
  return { isFetching, groups };
}

export default withRouter(connect(mapStateToProps)(Groups));
