import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import DatePicker from 'components/date_picker';
import TimePicker from 'components/time_picker';
import TextField from '@material-ui/core/TextField';
import AssigneeSelect from 'components/assignee_select';
import {setDescription, setDate, setTime, setAssignees} from 'actions/new_action_item';

import './new_action_item.scss';

class NewActionItem extends React.Component {

  dateChangeHandler = d => this.props.setDate(d);
  timeChangeHandler = e => this.props.setTime(e.target.value);
  assigneesChangeHandler = e => this.props.setAssignees(e.target.value);
  descriptionChangeHandler = e => this.props.setDescription(e.target.value);

  render(){
    const {description, date, time, assignees} = this.props;

    return(
      <div className="new-action-item">
        <TextField
          placeholder="Action Item Description"
          className="description-textarea"
          multiline
          value={description}
          onChange={this.descriptionChangeHandler}
        />
        <div className="additional-data-wrapper">
          <div className="assignee">
            <AssigneeSelect
              assignees={assignees}
              className="assignee-select"
              onChange={this.assigneesChangeHandler}
            />
          </div>
          <div className="date-time">
            <DatePicker date={date} onChange={this.dateChangeHandler} />
            <TimePicker value={time} onChange={this.timeChangeHandler} />
          </div>
        </div>
        <div className="button-wrapper">
          <Button size="large" variant="contained" color="primary">Save</Button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = {
  setTime,
  setDate,
  setAssignees,
  setDescription
};

const mapStateToProps = state => ({
  ...state.newActionItem
});

export default connect(mapStateToProps, mapDispatchToProps)(NewActionItem);