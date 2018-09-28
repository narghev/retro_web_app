import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logoutAction} from 'actions/user';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem } from '@material-ui/core'

import './header.scss'

class Header extends Component {
  state = {
    anchorEl: null
  }

  handleSignOut = () => {
    this.props.logoutAction();
    this.handleClose();
  }

  handleOpen = (e) => this.setState({ anchorEl: e.currentTarget });
  handleClose = () => this.setState({ anchorEl: null });

  render() {
    const { user } = this.props;
    const { anchorEl } = this.state;
    const open = !!anchorEl;

    return (
      <div className='header'>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className="grow">
              Fun Actions
            </Typography>
            { user && (
              <div>
                <IconButton 
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleOpen}
                  color="inherit"
                >
                  <Avatar src={user.photoURL} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
                </Menu>
              </div>
            )
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  logoutAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);