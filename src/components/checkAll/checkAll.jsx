import React from 'react';

import './checkAll.css';

function CheckAll(props) {
  const { isChecked, handleCheckAllClick } = props;
  let checkboxClassName = 'check-all__box';
  if (props.isChecked) {
    checkboxClassName = 'check-all__box check-all__box_checked';
  }
  return (
    <div className="check-all">
      <label>
        <input
          className="check-all__input"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckAllClick}
        />
        <span className={checkboxClassName} />
      </label>
    </div>
  );
}

export default CheckAll;
