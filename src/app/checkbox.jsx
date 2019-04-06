import React from 'react';
import '../common.blocks/checkbox__input.css';
import '../common.blocks/checkbox.css';

export const Checkbox = ({ checked, check, id }) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        onClick={check}
        checked={checked}
        readOnly
      />
    </div>
  );
};
