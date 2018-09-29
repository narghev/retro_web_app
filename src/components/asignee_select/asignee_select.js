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

  renderValue = uids => {
    return uids.map(uid => this.props.users[uid].displayName).join(", ");
  }

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
            value={asignees}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => this.renderValue(selected)}
          >
            {Object.keys(users).map(key => (
              <MenuItem key={users[key].uid} value={users[key].uid}>
                <Checkbox checked={asignees.indexOf(users[key].uid) > -1} />
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