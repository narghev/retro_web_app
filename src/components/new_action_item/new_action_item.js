import React from 'react';
import DatePicker from 'components/date_picker';
import TimePicker from 'components/time_picker';
import TextField from '@material-ui/core/TextField';
import AssigneeSelect from 'components/assignee_select';
import Button from '@material-ui/core/Button';

import './new_action_item.scss';

export default
class NewActionItem extends React.Component {
  render(){
    return(
      <div className="new-action-item">
        <TextField
          placeholder="Action Item Description"
          className="description-textarea"
          multiline
        />
        <div className="additional-data-wrapper">
          <div className="assignee">
            <AssigneeSelect
              className="assignee-select"
            />
          </div>
          <div className="date-time">
            <DatePicker/>
            <TimePicker />
          </div>
        </div>
        <div className="button-wrapper">
          <Button size="large" variant="contained" color="primary">Save</Button>
        </div>
      </div>
    );
  }
};