import React, { Component } from 'react';
import { auth, provider } from 'config/firebase';
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
  state = {
    user: null,
    error: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      user && this.setState({ ...this.state, user })
    })
  }

  sign_in = () => {
    auth.signInWithRedirect(provider)
    auth
      .getRedirectResult()
      .then(result => {
        this.setState({
          user: result.user
        });
      })
      .catch(e => {
        this.setState({
          ...this.state,
          error: {
            code: e.code,
            msg: e.message,
            mail: e.mail,
            cred: e.credential
          }
        });
      });
  };

  sign_out = () => {
    auth
      .signOut()
      .then(() => {
        this.setState({ user: null, error: null });
      })
  }

  render() {
    const { user } = this.state;
    const { classes } = this.props;
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
              <Button onClick={this.sign_in}>Sign in with Google!</Button>
            </Grid>
          }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);