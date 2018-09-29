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
    asignees: []
  }

  handleChange = e => {
    this.setState({ ...this.state, asignees: e.target.value });
  };

  render() {
    const { asignees } = this.state;
    const { users } = this.props;

    return (
      <div className="root">
        <FormControl className="form-control">
          <InputLabel htmlFor="select-multiple-checkbox">
            Asignees
          </InputLabel>
          <Select
            autoWidth
            multiple
            variant="outlined"
            value={asignees}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
          >
            {Object.keys(users).map(key => (
              <MenuItem key={users[key].uid} value={users[key].displayName}>
                <Checkbox checked={asignees.indexOf(users[key].displayName) > -1} />
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