import React from 'react';
import {connect} from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {openModalAction} from 'actions/action_item';

import './add_button.scss';

const AddButton = ({openModalAction}) => (
  <div className="add-button-wrapper">
    <Button variant="fab" color="primary" aria-label="Add" onClick={openModalAction}>
      <AddIcon />
    </Button>
  </div>
);

const mapDispatchToProps = {
  openModalAction
};

export default connect(null, mapDispatchToProps)(AddButton);