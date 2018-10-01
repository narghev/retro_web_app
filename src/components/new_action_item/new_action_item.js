import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import DatePicker from 'components/date_picker';
import TimePicker from 'components/time_picker';
import TextField from '@material-ui/core/TextField';
import {closeModalAction, createActionItemAction} from 'actions/action_item';
import AssigneeSelect from 'components/assignee_select';
import {setDescription, setDate, setTime, setAssignees, clearData} from 'actions/new_action_item';

import './new_action_item.scss';

class NewActionItem extends React.Component {

  state = {
    errorFields: []
  };

  saveClickHandler = async () => {
    const {createActionItemAction, closeModalAction, actionItemData} = this.props;
    const {description, date, assignees, setLoadingStatus, time, ownerUid} = actionItemData;
    const errorFields = [];

    if (!description) errorFields.push('description');
    if (!date) errorFields.push('date');
    if (!assignees.length) errorFields.push('assignees');

    if (errorFields.length){
      this.setState({errorFields});
      return;
    }
    
    await createActionItemAction(actionItemData);
    closeModalAction();
  };

  dateChangeHandler = d => this.props.setDate(d && d.toString());
  timeChangeHandler = e => this.props.setTime(e.target.value);
  assigneesChangeHandler = e => this.props.setAssignees(e.target.value);
  descriptionChangeHandler = e => this.props.setDescription(e.target.value);

  render(){
    const {errorFields} = this.state;
    const {actionItemData, clearData} = this.props;
    const {description, date, time, assignees} = actionItemData;

    const dateError = errorFields.includes('date');
    const assigneesError = errorFields.includes('assignees');
    const descriptionError = errorFields.includes('description');

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
          <div className="date-time">
            <DatePicker date={date} onChange={this.dateChangeHandler} error={dateError} />
            <TimePicker value={time} onChange={this.timeChangeHandler} />
          </div>
        </div>
        <div className="button-wrapper">
          <Button size="large" className="warning" onClick={clearData}>Clear</Button>
          <Button size="large" variant="contained" color="primary" onClick={this.saveClickHandler}>Save</Button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = {
  setTime,
  setDate,
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