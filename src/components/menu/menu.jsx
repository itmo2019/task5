import React from 'react';

import './menu.css';

export default function Menu(props) {
  return (
    <div className={`Menu ${props.className}`}>
      <div className="Menu__Hr" />
      <div className="Menu__Hr" />
      <div className="Menu__Hr" />
    </div>
  );
}
