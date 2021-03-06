import React from 'react';
import {auth} from 'config/firebase';
import { connect } from 'react-redux';
import { saveUser } from 'helpers/user';
import { setRetroOwner } from 'actions/new_retro';
import { setLoadingStatus } from 'actions/loading';
import { setOwner } from 'actions/new_action_item';
import { setUserAction, getUsersAction } from 'actions/user';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/home';
import Login from 'pages/login';
import NotFound from 'pages/not_found';

import Header from 'components/header';
import Loading from 'components/loading';
import AddButton from 'components/add_button';
import RetroModal from 'components/retro_modal';
import ActionItemModal from 'components/action_item_modal';

import './application.scss';

class App extends React.Component {
  componentDidMount(){
    const {setUserAction, setLoadingStatus, getUsersAction, setOwner, setRetroOwner} = this.props;
    setLoadingStatus(true);
    getUsersAction();
    auth.onAuthStateChanged(user => {
      setUserAction(user);
      user && saveUser(user);
      user && setOwner(user.uid);
      user && setRetroOwner(user.uid);
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
          <ActionItemModal />
          <RetroModal />
          <AddButton />
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
  setLoadingStatus,
  getUsersAction,
  setRetroOwner,
  setOwner
};

export default connect(mapStateToProps, mapDispatchToProps)(App);