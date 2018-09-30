import React from 'react';
import {connect} from 'react-redux';
import CloseIcon from '@material-ui/icons/Clear';
import {closeModalAction} from 'actions/action_item';
import NewActionItem from 'components/new_action_item';

import './action_item_modal.scss';

class ActionItemModal extends React.Component {

  contentClickHandler = e => e.stopPropagation();

  render(){
    const {actionItemModalState, closeModalAction} = this.props;

    if (!actionItemModalState) return null;

    return(
      <div className="modal">
        <div className="background" onClick={closeModalAction}>
          <div className="content" onClick={this.contentClickHandler}>
            <div className="close-button-wrapper">
              <CloseIcon onClick={closeModalAction} />
            </div>
            <NewActionItem />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actionItemModalState: state.actionItemModalState
});

const mapDispatchToProps = {
  closeModalAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionItemModal);