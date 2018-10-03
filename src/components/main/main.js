import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import RetroList from 'components/retro_list';
import MainLoading from 'components/main_loading';
import ActionItemList from 'components/action_item_list';
import { displayNotification } from 'helpers/notification';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';

import './main.scss';

class Main extends React.Component {

  static defaultProps = {
    actionItems: []
  };

  state = {
    tabIndex: 0,
    loading: true,
    assignedToMe: [],
    assignedByMe: []
  };

  static getDerivedStateFromProps = (nextProps, state) => {
    const { actionItems, userUid, users, retros } = nextProps;
    const { loading } = state;

    if (loading && isLoaded(actionItems) && isLoaded(users) && isLoaded(retros)){
      return {loading: false};
    }

    const assignedByMe = actionItems[userUid] || [];
    const assignedToMe = [];
    
    _.forEach(actionItems, itemList =>
      itemList.forEach(item => {
        if (item.assignees.includes(userUid))
          assignedToMe.push(item);
      })
    );

    assignedToMe.sort((item1, item2) => moment(item1.date) < moment(item2.date));
    assignedByMe.sort((item1, item2) => moment(item1.date) < moment(item2.date));

    return {assignedByMe, assignedToMe};
  };

  componentDidUpdate(_, prevState){
    if (this.state.assignedToMe.length - prevState.assignedToMe.length === 1) {
      displayNotification('A new action item has been assigned to you!');
    }
  }

  handleTabChange = (_, tabIndex) => this.setState({tabIndex});

  render(){
    const {tabIndex, assignedToMe, assignedByMe, loading} = this.state;
    const {retros} = this.props;

    return (
      <div className="main-wrapper">
        <AppBar position="static">
          <Tabs value={tabIndex} onChange={this.handleTabChange}>
            <Tab label="Assigned To Me" />
            <Tab label="Assigned By Me" />
            <Tab label="Retros" />
          </Tabs>
        </AppBar>
        {loading && <MainLoading />}
        {tabIndex === 0 && <ActionItemList items={assignedToMe} className={loading && 'loading'} />}
        {tabIndex === 1 && <ActionItemList items={assignedByMe} className={loading && 'loading'} />}
        {tabIndex === 2 && <RetroList retros={retros} className={loading && 'loading'} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userUid: state.user.uid,
  retros: state.firebase.data.retros,
  actionItems: state.firebase.data.action_items,
  users: state.firebase.data.users
});

export default compose(
  firebaseConnect([
    'users',
    'retros',
    'action_items'
  ]),
  connect(mapStateToProps)
)(Main);