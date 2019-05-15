import React from 'react';

import './check.css';

export default function Check(props) {
  const { isChecked, onChange } = props;

  return (
    <div className="check">
      <label>
        <input className="check__input" type="checkbox" checked={isChecked} onChange={onChange} />
        <span className={`check__box ${isChecked ? 'check__box_checked' : ''}`} />
      </label>
    </div>
  );
}
