import React from 'react';

import './checkbox.css';

export default function Checkbox({ id, className, checked, onClick }) {
  return (
    <input
      id={id}
      className={className}
      type="checkbox"
      checked={checked}
      onClick={onClick}
    />
  );
}
