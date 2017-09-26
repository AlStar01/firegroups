import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Groups extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'SYNC_GROUPS_START' });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: 'SYNC_GROUPS_STOP' });
  }

  render() {
    const { isFetching, groups } = this.props;

    return (
      <div>
        {isFetching && groups.length === 0 &&
          <div>Loading...</div>
        }

        {!isFetching && groups.length === 0 &&
          <div>No groups...</div>
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

Groups.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  groups: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { groups: { isFetching, items: groups }} = state;
  return { isFetching, groups };
}

export default withRouter(connect(mapStateToProps)(Groups));
