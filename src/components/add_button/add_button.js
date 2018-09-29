import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Input,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'

import './add_button.scss';

class AddButton extends Component {
  state = {
    open: false,
    asignees: []
  };

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderOptions = users => {
    Object.keys(users).forEach(key => {
      <MenuItem value={users[key].uid}>{users[key].displayName}</MenuItem>
    });
  }

  render() {
    const { open, asignees } = this.state;
    const { users } = this.props;

    return (
      <div className="add-button-wrapper">
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}>
          <AddIcon />
        </Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={this.handleClose}
        >
          <DialogTitle>Select Asignees</DialogTitle>
          <DialogContent>
            <form className="container">
              <FormControl className="form-control">
                <InputLabel htmlFor="asignees-simple">Asignees</InputLabel>
                <Select
                  value={asignees}
                  onChange={this.handleChange('asignees')}
                  input={<Input id="asignees-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                    {this.renderOptions(users)}
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(AddButton);