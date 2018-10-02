import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {closeModalAction, createActionItemAction} from 'actions/action_item';
import AssigneeSelect from 'components/assignee_select';
import RetroSelect from 'components/retro_select';
import {setDescription, setAssignees, clearData, setRetro} from 'actions/new_action_item';

import './new_action_item.scss';

class NewActionItem extends React.Component {

  state = {
    errorFields: []
  };

  saveClickHandler = async () => {
    const {createActionItemAction, closeModalAction, actionItemData} = this.props;
    const {description, assignees, retro} = actionItemData;
    const errorFields = [];

    if (!description) errorFields.push('description');
    if (!assignees.length) errorFields.push('assignees');
    if (retro === null) errorFields.push('retro');

    if (errorFields.length){
      this.setState({errorFields});
      return;
    }
    
    await createActionItemAction(actionItemData);
    closeModalAction();
  };

  assigneesChangeHandler = e => this.props.setAssignees(e.target.value);
  descriptionChangeHandler = e => this.props.setDescription(e.target.value);
  retroChangeHandler = e => this.props.setRetro(e.target.value);

  render(){
    const {errorFields} = this.state;
    const {actionItemData, clearData} = this.props;
    const {description, assignees, retro} = actionItemData;

    const assigneesError = errorFields.includes('assignees');
    const descriptionError = errorFields.includes('description');
    const retroError = errorFields.includes('retro');

    return(
      <div className="new-action-item">
        <TextField
          placeholder="Action Item Description"
          className="description-textarea"
          multiline
          value={description}
          onChange={this.descriptionChangeHandler}
          error={descriptionError}
        />
        <div className="additional-data-wrapper">
          <div className="assignee">
            <AssigneeSelect
              assignees={assignees}
              className="assignee-select"
              onChange={this.assigneesChangeHandler}
              error={assigneesError}
            />
          </div>
        </div>
        <RetroSelect onChange={this.retroChangeHandler} value={retro} error={retroError} />
        <div className="button-wrapper">
          <Button size="large" className="warning" onClick={clearData}>Clear</Button>
          <Button size="large" variant="contained" color="primary" onClick={this.saveClickHandler}>Save</Button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = {
  setRetro,
  clearData,
  setAssignees,
  setDescription,
  closeModalAction,
  createActionItemAction
};

const mapStateToProps = state => ({
  actionItemData: state.newActionItem
});

export default connect(mapStateToProps, mapDispatchToProps)(NewActionItem);