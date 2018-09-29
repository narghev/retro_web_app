import React from 'react';
import TextField from '@material-ui/core/TextField';
import AssigneeSelect from 'components/assignee_select';

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
          </div>
        </div>
      </div>
    );
  }
};