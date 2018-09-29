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
import './asignee_select.scss';

class AsigneeSelect extends Component {
  state = {
    users: {},
    asignees: []
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.users);
    this.setState({ ...this.state, users: nextProps.users });
  }

  handleChange = e => {
    console.log(e.target.value);
    // this.setState({ ...this.state, asignees: event.target.value });
  };


  render() {
    const { asignees, users } = this.state;

    return (
      <div className="root">
        <FormControl className="form-control">
          <InputLabel htmlFor="select-multiple-checkbox">
            Asignees
          </InputLabel>
          <Select
            multiple
            variant="outlined"
            value={asignees}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
          >
            {Object.keys(users).forEach(key => (
              <MenuItem key={users[key].uid} value={users[key].uid}>
                <Checkbox checked={asignees.indexOf(users[key].email) > -1} />
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

export default connect(mapStateToProps)(AsigneeSelect);