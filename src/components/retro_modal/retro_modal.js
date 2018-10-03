import React from 'react';
import {connect} from 'react-redux';
import NewRetro from 'components/new_retro';
import CloseIcon from '@material-ui/icons/Clear';
import {closeModalAction} from 'actions/retro';

import './retro_modal.scss';

class RetroModal extends React.Component {

  contentClickHandler = e => e.stopPropagation();

  render(){
    const {retroModalState, closeModalAction} = this.props;

    if (!retroModalState) return null;

    return(
      <div className="modal">
        <div className="background" onClick={closeModalAction}>
          <div className="content" onClick={this.contentClickHandler}>
            <div className="close-button-wrapper">
              <CloseIcon onClick={closeModalAction} />
            </div>
            <NewRetro />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  retroModalState: state.retroModalState
});

const mapDispatchToProps = {
  closeModalAction
};

export default connect(mapStateToProps, mapDispatchToProps)(RetroModal);