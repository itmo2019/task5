import React from 'react';
import './check.css';

export default function Check(props) {
  const { isChecked, isMainCheckBox, handleCheckAllClick, handleMailCheckClick } = props;

  return (
    <div className="check">
      <label>
        <input
          className="check__input"
          type="checkbox"
          checked={isChecked}
          onChange={isMainCheckBox ? handleCheckAllClick : handleMailCheckClick}
        />
        <span className={`check__box ${props.isChecked ? 'check__box_checked' : ''}`} />
      </label>
    </div>
  );
}
