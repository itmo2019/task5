import React from 'react';

import './menu.css';

export default function Menu(props) {
  return (
    <div className={`menu ${props.className}`}>
      <div className="menu__hr" />
      <div className="menu__hr" />
      <div className="menu__hr" />
    </div>
  );
}
