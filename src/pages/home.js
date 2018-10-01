import React from 'react';
import Main from 'components/main';

import './stylesheets/home.scss';

export default
class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <Main />
      </div>
    )
  }
}
