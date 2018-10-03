import React from 'react';
import {connect} from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { openModalAction } from 'actions/retro';

import './add_retro_button.scss';

const AddButton = ({openModalAction}) => (
  <div className="add-retro-button-wrapper" onClick={openModalAction}>
    <AddIcon />
  </div>
);

const mapDispatchToProps = {
  openModalAction
};

export default connect(null, mapDispatchToProps)(AddButton);