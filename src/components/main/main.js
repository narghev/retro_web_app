import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import ActionItemList from 'components/action_item_list';
import { displayNotification } from 'helpers/notification';
import { firebaseConnect, isEmpty } from 'react-redux-firebase';

import './main.scss';

class Main extends React.Component {

  state = {
    tabIndex: 0,
    assignedToMe: [],
    assignedByMe: []
  };

  static getDerivedStateFromProps = nextProps => {
    const { actionItems, userUid } = nextProps;
    if (isEmpty(actionItems) || !userUid) return null;

    const assignedByMe = actionItems[userUid];
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
    const {tabIndex, assignedToMe, assignedByMe} = this.state;

    return (
      <div className="main-wrapper">
        <AppBar position="static">
          <Tabs value={tabIndex} onChange={this.handleTabChange}>
            <Tab label="Assigned To Me" />
            <Tab label="Assigned By Me" />
          </Tabs>
        </AppBar>

        {tabIndex === 0 && <ActionItemList items={assignedToMe} />}
        {tabIndex === 1 && <ActionItemList items={assignedByMe} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actionItems: state.firebase.data.action_items,
  userUid: state.user.uid
});

export default compose(
  firebaseConnect([
    'action_items',
    'users'
  ]),
  connect(mapStateToProps)
)(Main);