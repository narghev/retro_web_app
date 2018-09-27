import React, { Component } from 'react';
import firebase from 'config/firebase';
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default class Login extends Component {
  state = {
    token: '',
    user: {},
    error: {}
  };

  sign_in = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(result => {
        this.setState({
          token: result.credential.accessToken,
          user: result.user
        });
      })
      .catch(e => {
        this.setState({
          ...this.state,
          error: {
            code: e.code,
            msg: e.message,
            mail: e.mail,
            cred: e.credential
          }
        });
      });
  };

  render() {
    const user = firebase.auth().currentUser;
    return (
      <div>
        <button onClick={this.sign_in}>Sign in with Google!</button>
        <div>{user ? <h1>{user.displayName}</h1> : null}</div>
      </div>
    );
  }
}
