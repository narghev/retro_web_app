import React from 'react';
import Loading from 'images/loading.gif';

import './main_loading.scss';

export default () => (
  <div className="main-loading">
    <img src={Loading} alt="" />
  </div>
);