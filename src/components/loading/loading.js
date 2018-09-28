import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loading.scss';

export default () => (
  <div className="loading-wrapper">
    <CircularProgress className="indicator" color="primary" size={50} />
  </div>
);