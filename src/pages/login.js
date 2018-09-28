import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loginAction } from 'actions/user';
import GoogleLogo from 'images/google_logo.png';
import Button from '@material-ui/core/Button';

import './stylesheets/login.scss';

class Login extends Component {
  render() {
    const { loginAction } = this.props;
    return (
      <div className="page login">
        <img src={GoogleLogo} alt="" />
        <Button size="large" variant="contained" color="primary" onClick={loginAction}>
          Sign In
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginAction
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);