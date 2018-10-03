import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core';

import './retro_select.scss';

class RetroSelect extends React.Component {

  static defaultProps = {
    retros: []
  };

  render() {
    const { retros, onChange, error, value } = this.props;

    return (
      <div className="retro-select-wrapper">
        <FormControl className="form-control">
          <InputLabel htmlFor="retro-select">
            Retros
          </InputLabel>
          <Select
            value={value === null ? '' : value}
            onChange={onChange}
            input={<Input id="retro-select" />}
            error={error}
          >
            {retros && retros.map((r, i) => (
              <MenuItem key={i} value={i}>
                {moment(r.date).format('DD-MMM-YYYY')}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  retros: state.firebase.data.retros
});

export default connect(mapStateToProps)(RetroSelect);