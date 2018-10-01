import React from 'react';
import './action_item.scss';

export default
class ActionItem extends React.Component {
  render(){
    const {item} = this.props;
    const {description, date, time, owner, assignees} = item;
    return (
      <h1 className='a'>{description}</h1>
    );
  }
}