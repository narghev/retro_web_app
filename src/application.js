import React from 'react';
import {auth} from 'config/firebase';
import { connect } from 'react-redux';
import { setUserAction } from 'actions/user';
import { setLoadingStatus } from 'actions/loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/home';
import Login from 'pages/login';
import NotFound from 'pages/not_found';

import Header from 'components/header';
import Loading from 'components/loading';

import './application.scss';

class App extends React.Component {
  componentDidMount(){
    const {setUserAction, setLoadingStatus} = this.props;
    setLoadingStatus(true);
    auth.onAuthStateChanged(user => {
      setUserAction(user);
      setLoadingStatus(false);
    });
  }

  render(){
    const {user, loading} = this.props;

    if (!user) return (
      <React.Fragment>
        {loading && <Loading />}
        <Login />
      </React.Fragment>
    );

    return(
      <Router>
        <React.Fragment>
          {loading && <Loading />}
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading
});

const mapDispatchToProps = {
  setUserAction,
  setLoadingStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(App);