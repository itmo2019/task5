import React from 'react';

import './ya-checkbox.css';

function YaCheckbox({ id, check, checked }) {
  return (
    <input id={id} className="ya-checkbox" type="checkbox" onClick={e => check(e.target.checked)} checked={checked}/>
  );
}

export default YaCheckbox;
