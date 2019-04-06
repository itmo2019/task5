import React from 'react';

import './left-menu.css';
import FoldersList from './folders-list/folders-list';

function LeftMenu() {
  return  <div className="main-block__left-menu">
    <div className="write-letter-button">Написать</div>
    <FoldersList />
  </div>;
}

export default LeftMenu;
