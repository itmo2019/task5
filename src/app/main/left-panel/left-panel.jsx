import React from 'react';

import './left-panel.css';

function Folder({ value }) {
  return (
    <li className="folders-panel__folder">
      <a className="folders-panel__folder_link-decoration" href="#">
        {value}
      </a>
    </li>
  );
}

function LeftPanel() {
  return (
    <div className="left-panel">
      <button className="compose">Написать</button>
      <nav>
        <ul className="folders-panel">
          <Folder value="Входящие" />
          <Folder value="Отправленные" />
          <Folder value="Удаленные" />
          <Folder value="Спам" />
          <Folder value="Черновики" />
          <Folder value="Создать папку" />
        </ul>
      </nav>
    </div>
  );
}

export default LeftPanel;
