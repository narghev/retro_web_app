import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import MiniActionItem from 'components/mini_action_item';

import './retro.scss';

class Retro extends React.Component {

  state = {
    items: []
  };

  static getDerivedStateFromProps = nextProps => {
    const {actionItems, data} = nextProps;
    if (!actionItems) return null;

    const items = [];

    _.forEach(actionItems, itemList => {
      itemList.forEach(item => {
        if (item.retro === data.index) {
          items.push(item);
        }
      });
    });

    return {items};
  };

  render() {
    const {data, users} = this.props;
    const { items } = this.state;
    const {displayName, photoURL} = users[data.ownerUid];

    return (
      <Card className="retro">
        <CardHeader
          avatar={
            <Avatar src={photoURL} alt="" />
          }
          title={moment(data.date).format('DD-MMM-YYYY')}
          subheader={displayName}
        />
        <CardContent>
          {
            items && items.map((i, id) => <MiniActionItem key={id} item={i} />)
          }
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  users: state.firebase.data.users,
  actionItems: state.firebase.data.action_items
});

export default connect(mapStateToProps)(Retro);