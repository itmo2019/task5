import React from 'react';

import './check.css';

function Check(props) {
  const { isChecked, processCheckboxChange } = props;
  let checkboxClassName = 'check__box';
  if (props.isChecked) {
    checkboxClassName = 'check__box check__box_checked';
  }
  return (
    <div className="check">
      <label>
        <input
          className="check__input"
          type="checkbox"
          checked={isChecked}
          onChange={processCheckboxChange}
        />
        <span className={checkboxClassName} />
      </label>
    </div>
  );
}

export default Check;
