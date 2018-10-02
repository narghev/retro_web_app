import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './retro.scss';

class Retro extends React.Component {
  state = {
    expanded: false
  };

  handleExpandClick = () => this.setState(state => ({ expanded: !state.expanded }));

  render() {
    return (
      <Card className="retro">
        <CardHeader
          avatar={
            <Avatar>
              R
            </Avatar>
          }
          title="Owner"
          subheader="September 14, 2016"
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

export default Retro;