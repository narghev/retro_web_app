import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

import './mini_action_item.scss';

class MiniActionItem extends React.Component {
  render(){
    const {item, users} = this.props;
    return (
      <Card className="mini-action-item">
        <CardContent>
          <Typography color="textSecondary">
            {
              item.assignees.map(uid => `${users[uid].displayName}, `)
            }
          </Typography>
          <Typography className="description" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  users: state.firebase.data.users
});

export default connect(mapStateToProps)(MiniActionItem);