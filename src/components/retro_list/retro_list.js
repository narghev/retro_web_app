import React from 'react';
import moment from 'moment';
import Retro from 'components/retro';
import AddRetroButton from 'components/add_retro_button';

import './retro_list.scss';

export default
class RetroList extends React.Component {
  render(){
    const {retros} = this.props;

    const sortedRetros = retros && retros.sort((r1, r2) => moment(r1.date) > moment(r2.date));

    return(
      <div className="retro-list">
        {
          sortedRetros && sortedRetros.map((r, i) => <Retro key={i} data={r} index={i} />)
        }
        <AddRetroButton />
      </div>
    );
  }
};