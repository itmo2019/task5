import React from 'react';

import './header.css';

function Header() {
  return  <div className="messages-block-header">
      <input type="checkbox" className="checkbox" id="check-all" onClick="selectAll(this)"/>
      <div className="messages-block-header__action">Переслать</div>
      <div className="messages-block-header__action" id="delete-messages" onClick="deleteSelectedMessages()">
        Удалить
      </div>
      <div className="messages-block-header__action">Это спам!</div>
      <div className="messages-block-header__action">Прочитано</div>
  </div>;
}

export default Header;
