import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Chip,
  Avatar
} from '@material-ui/core';
import './assignee_select.scss';

class AssigneeSelect extends Component {

  static defaultProps = {
    assignees: [],
    users: {},
    error: false
  };

  handleDelete = uid => {
    const newAssignees = this.props.assignees.filter(asigneeUid => asigneeUid !== uid);
    this.props.onChange({target: { value: newAssignees }});
  }

  renderValue = uids => {
    const { users } = this.props;
    return uids.map(uid => {
      const user = users[uid];
      const [fName, lName] = user.displayName.split(" ");
      const label = `${fName[0]}${lName[0]}`;
      return (<Chip
        avatar={<Avatar src={user.photoURL}/>}
        onDelete={() => this.handleDelete(uid)}
        key={uid}
        label={label} />);
    });
  }

  render() {
    const { users, assignees, onChange, error } = this.props;

    return (
      <div className="assignee-select-wrapper">
        <FormControl className="form-control">
          <InputLabel htmlFor="select-multiple-checkbox">
            Assignees
          </InputLabel>
          <Select
            multiple
            value={assignees}
            onChange={onChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => this.renderValue(selected)}
            error={error}
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