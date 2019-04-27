import React from 'react';

import './ya-big-button.css';

function YaBigButton(props) {
  return (
    <button className="ya-big-button" type="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default YaBigButton;
