import React from 'react';
import moment from 'moment';
import ClearIcon from '@material-ui/icons/Cancel';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import './date_picker.scss';
import 'react-day-picker/lib/style.css';

export default
class DatePicker extends React.PureComponent {

  static defaultProps = {
    error: false
  };

  render(){
    const {
      label,
      date,
      onChange,
      onClear,
      className,
      showClearIcon,
      error
    } = this.props;
    const value = date ? moment(date).format('DD-MMM-YYYY') : '';
    return(
      <div className={`date ${className} ${error ? 'error' : ''}`}>
        {label && <span className="label">{label}</span>}
        <div>
          <DayPickerInput
            value={value}
            onDayChange={onChange}
            placeholder="Select Date"
          />
          {
            showClearIcon &&
            <ClearIcon
              className="clear-date"
              onClick={onClear}
              data-tip="Clear Date"
            />
          }
        </div>
      </div>
    );
  }
}