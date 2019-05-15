import React from 'react';
import Check from '../check/check';

import './toolbar.css';

function renderSwitch(item) {
  switch (item.type) {
    case 'button':
      return (
        <input
          className={`toolbar__button ${item.isActive ? 'toolbar__button_is-active' : ''}`}
          type="button"
          value={item.value}
          onClick={item.onClick}
        />
      );
    case 'checkbox':
      return <Check onChange={item.onClick} isChecked={item.value} />;
    default:
      return <div />;
  }
}

export default function toolbar(props) {
  const { children } = props;
  const listItems = children.map(item => <li className="toolbar__item">{renderSwitch(item)}</li>);

  return <ul className="toolbar">{listItems}</ul>;
}
