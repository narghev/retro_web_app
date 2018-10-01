import React from 'react';
import _ from 'lodash';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import ActionItemList from 'components/action_item_list';
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

    return {assignedByMe, assignedToMe};
  };

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
    'action_items'
  ]),
  connect(mapStateToProps)
)(Main);