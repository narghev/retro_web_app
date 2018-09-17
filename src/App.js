import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from 'pages/home';
import NotFound from 'pages/not_found';

export default
class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}