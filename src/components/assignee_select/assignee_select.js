import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox
} from '@material-ui/core';
import './assignee_select.scss';

class AssigneeSelect extends Component {
  state = {
    assignees: []
  }

  handleChange = e => {
    this.setState({ ...this.state, assignees: e.target.value });
  };

  renderValue = uids => {
    return uids.map(uid => this.props.users[uid].displayName).join(", ");
  }

  render() {
    const { assignees } = this.state;
    const { users } = this.props;

    return (
      <div className="assignee-select-wrapper">
        <FormControl className="form-control">
          <InputLabel htmlFor="select-multiple-checkbox">
            Assignees
          </InputLabel>
          <Select
            autoWidth
            multiple
            value={assignees}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => this.renderValue(selected)}
          >
            {Object.keys(users).map(key => (
              <MenuItem key={users[key].uid} value={users[key].uid}>
                <Checkbox checked={assignees.indexOf(users[key].uid) > -1} />
                <ListItemText primary={users[key].displayName} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(AssigneeSelect);