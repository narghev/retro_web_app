import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import DatePicker from 'components/date_picker';
import TimePicker from 'components/time_picker';
import {setDate, setTime, clearData} from 'actions/new_retro';
import {closeModalAction, createRetroAction} from 'actions/retro';

import './new_retro.scss';

class NewRetro extends React.Component {

  state = {
    errorFields: []
  };

  saveClickHandler = async () => {
    const {createRetroAction, closeModalAction, retroData} = this.props;
    const {date} = retroData;
    const errorFields = [];

    if (!date) errorFields.push('date');

    if (errorFields.length){
      this.setState({errorFields});
      return;
    }
    
    await createRetroAction(retroData);
    closeModalAction();
  };

  timeChangeHandler = e => this.props.setTime(e.target.value);
  dateChangeHandler = e => this.props.setDate(e.toString());

  render(){
    const {errorFields} = this.state;
    const {retroData, clearData} = this.props;
    const {date, time} = retroData;

    const dateError = errorFields.includes('date');

    return(
      <div className="new-retro">
        <div className="date-time">
          <DatePicker date={date} onChange={this.dateChangeHandler} error={dateError} />
          <TimePicker value={time} onChange={this.timeChangeHandler} />
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
  clearData,
  setDate,
  setTime,
  closeModalAction,
  createRetroAction
};

const mapStateToProps = state => ({
  retroData: state.newRetro
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRetro);