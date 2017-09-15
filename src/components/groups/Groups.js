import React, { Component } from 'react';

class Groups extends Component {
  render() {
    return (
      <ul>
        {this.props.groups.map(group => <li key={group.id}>{group.name}</li>)}
      </ul>
    );
  }
}

export default Groups;
