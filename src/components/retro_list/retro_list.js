import React from 'react';
import Retro from 'components/retro';
import AddRetroButton from 'components/add_retro_button';

import './retro_list.scss';

export default
class RetroList extends React.Component {
  render(){
    const {retros} = this.props;
    return(
      <div className="retro-list">
        <AddRetroButton />
        {
          retros && retros.map((r, i) => <Retro key={i} data={r} />)
        }
      </div>
    );
  }
};