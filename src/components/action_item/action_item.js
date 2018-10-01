import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import DateIcon from '@material-ui/icons/DateRange'

import './action_item.scss';

class ActionItem extends React.Component {
  render(){
    const {item, users} = this.props;
    const {description, date, time, ownerUid, assignees} = item;
    const owner = users[ownerUid];

    return (
      <div className="action-item">
        <Card className="card">
          <CardContent className="content">
            <div className="description">
              <Typography className="text" component="span">
                {description}
              </Typography>
            </div>
            <div className="info">
              <Chip
                avatar={<Avatar alt="" src={owner.photoURL} />}
                label={owner.displayName}
              />
              <Chip
                icon={<DateIcon />}
                label={<span>{moment(date).format('DD-MMM-YYYY')} {time}</span>}
                color="secondary"
                variant="outlined"
              />
              <div className="asignees-avatars">
                {
                  assignees.map(uid => <Avatar className="avatar" key={uid} alt="" src={users[uid].photoURL} />)
                }
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.firebase.data.users
});

export default compose(
  connect(mapStateToProps)
)(ActionItem);