import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Chip,
  Avatar
} from '@material-ui/core';

import './retro_select.scss';

class RetroSelect extends React.Component {

  render() {
    const { retros, onChange, error, value } = this.props;

    const renderValue = (retros && retros[value]) ? moment(retros[value].date).format('DD-MMM-YYYY') : '';

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
            {retros.map((r, i) => (
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