import React from 'react';

import './left-panel.css';

export function Folder({ value }) {
  return (
    <li className="left-panel__folder">
      <a className="left-panel__folder_link" href="#">
        {value}
      </a>
    </li>
  );
}
