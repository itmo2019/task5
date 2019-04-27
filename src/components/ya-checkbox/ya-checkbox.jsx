import React from 'react';

import './ya-checkbox.css';

function YaCheckbox(props) {
  return (
    <input id={props.id} className="ya-checkbox" type="checkbox" onClick={props.onClick} checked={props.checked}/>
  );
}

export default YaCheckbox;
