import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import './retro.scss';

class Retro extends React.Component {
  render() {
    const {data, users} = this.props;
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
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  users: state.firebase.data.users
});

export default connect(mapStateToProps)(Retro);