import React from 'react';
import { Tooltip, Avatar } from '@material-ui/core';

export default ({ placement="top", title, src, key }) => (
  <div>
     <Tooltip placement={placement} title={title}>
        <Avatar className="avatar" key={key} alt="" src={src} />
      </Tooltip>
  </div>
);