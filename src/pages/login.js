import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loginAction } from 'actions/user';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const styles = {
  card: {
    maxWidth: 400,
    textAlign: 'center',
  },
  media: {
    height: 400,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  }
};


class Login extends Component {
  render() {
    const { classes, user, loginAction } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs>
          { user ?
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={user.photoURL}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="display2" gutterBottom>
                {user.displayName}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button size="small" color="secondary" onClick={this.sign_out}>Sign Out!</Button>
            </CardActions>
          </Card>
          : <Grid item xs>
              <Button onClick={loginAction}>Sign in with Google!</Button>
            </Grid>
          }
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  loginAction
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));