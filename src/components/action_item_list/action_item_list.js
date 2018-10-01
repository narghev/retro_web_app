import React from 'react';
import ActionItem from 'components/action_item';

import './action_item_list.scss';

export default
class ActionItemList extends React.Component {
  render(){
    const {items} = this.props;
    return (
      <div className="action-item-list">
      {
        items.map((item, idx) =>
          <ActionItem key={idx} item={item} />
        )
      }
      </div>
    );
  }
};