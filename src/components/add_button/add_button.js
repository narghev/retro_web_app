import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import './add_button.scss';

export default () => (
  <div className="add-button-wrapper">
    <Button variant="fab" color="primary" aria-label="Add">
      <AddIcon />
    </Button>
  </div>
);  