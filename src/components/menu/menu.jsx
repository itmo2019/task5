import React from 'react';

import './menu.css';

export default function Menu(props) {
  const { className } = props;

  return (
    <div className={`menu ${className}`}>
      <div className="menu__hr" />
      <div className="menu__hr" />
      <div className="menu__hr" />
    </div>
  );
}
