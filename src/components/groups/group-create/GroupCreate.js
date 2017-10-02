import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import './GroupCreate.css';

import FieldGroup from '../../helpers/FieldGroup';

import { createGroup } from '../../../actions/groups';

class GroupCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      type: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ ...this.state, name: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleTypeChange(e) {
    this.setState({ ...this.state, type: e.target.value });
  }

  handleSubmit() {
    const newGroup = this.state;
    this.props.dispatch(createGroup(newGroup));
  }

  render() {
    return (
      <Row>
        <Col sm={6}>
          <h1>Create group</h1>

          <br />

          <form name="createGroupForm" onSubmit={this.handleSubmit}>
            <FieldGroup
              id="name"
              type="text"
              label="Name"
              placeholder="Name"
              onChange={this.handleNameChange}
            />

            <FormGroup controlId="description">
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Description" onChange={this.handleDescriptionChange} />
            </FormGroup>

            <FormGroup>
              <Checkbox onChange={this.handleTypeChange}>Private</Checkbox>
            </FormGroup>

            <Button bsStyle="primary" type="submit">Submit</Button>
          </form>
        </Col>
      </Row>
    );
  };
};

GroupCreate.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  groups: PropTypes.array.isRequired
};

function mapStateToProps(state) {
 const { groups: { isFetching, items: groups} } = state;

 return {
   isFetching,
   groups
 };
}

export default withRouter(connect(mapStateToProps)(GroupCreate));
