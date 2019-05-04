import React from 'react';
import { Folder } from './folder';

import './left-panel.css';

export default function LeftPanel() {
  return (
    <div className="left-panel">
      <button className="left-panel__compose-button">Написать</button>
      <nav>
        <ul className="left-panel__folders">
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
