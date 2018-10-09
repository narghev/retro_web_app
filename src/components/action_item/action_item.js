import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import DateIcon from '@material-ui/icons/DateRange';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import AvatarTooltip from 'components/avatar_tooltip';
import {setIsDone} from 'actions/new_action_item';

import './action_item.scss';

class ActionItem extends React.Component {
  isDoneHandler = e => this.props.setIsDone();
  
  render(){
    const {item, users,} = this.props;
    const {description, date, ownerUid, assignees, isDone} = item;
    const owner = users[ownerUid];

    console.log(isDone)

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
                avatar={<Checkbox disabled={isDone} value={isDone} onClick={this.isDoneHandler} />}
                label="Mark Complete"
              />
              <Chip
                icon={<DateIcon />}
                label={<span>{moment(date).format('DD-MMM-YYYY HH:MM')}</span>}
                color="secondary"
                variant="outlined"
              />
              <div className="asignees-avatars">
                {
                  assignees.map(uid => (
                    <AvatarTooltip
                      src={users[uid].photoURL}
                      key={uid} placement="top"
                      title={users[uid].displayName}
                    />
                  ))
                }
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setIsDone
}

const mapStateToProps = state => ({
  users: state.firebase.data.users,
  actionItemData: state.newActionItem
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ActionItem);