import React from 'react';
import Input from '@material-ui/core/Input';

import './time_picker.scss';

export default
class TimePicker extends React.PureComponent {
  render(){
    const {onChange, value} = this.props;
    return(
      <div className="time-picker">
        <Input
          type="time"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}