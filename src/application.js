import React from 'react';
import {auth} from 'config/firebase';
import { connect } from 'react-redux';
import {setUserAction} from 'actions/user';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/home';
import NotFound from 'pages/not_found';
import Login from 'pages/login';

import './application.scss';

class App extends React.Component {
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.props.setUserAction(user);
    });
  }

  render(){
    const {user} = this.props;
    if (user === null) return <Login />;

    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  setUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);