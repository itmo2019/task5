import React from 'react';
import './menu.css';

function Menu(props) {
  return (
    <div className="menu content__menu">
      <button className="menu__send-button send-button" title="Написать" type="button">
        Написать
      </button>
      <div className="folders menu__folders">
        <a href="#inbox" title="Входящие" className="folders__folder folders__folder_active">
          Входящие
        </a>
        <a href="#sent" title="Отправленные" className="folders__folder">
          Отправленные
        </a>
        <a href="#trash" title="Удалённые" className="folders__folder">
          Удалённые
        </a>
        <a href="#spam" title="Спам" className="folders__folder">
          Спам
        </a>
        <a href="#draft" title="Черновики" className="folders__folder">
          Черновики
        </a>
        <a href="#create-folder" title="Создать папку" className="folders__folder">
          Создать папку
        </a>
      </div>
      <button
        className="message-action-button menu__message-action-button"
        title="Получить письмо"
        type="button"
        onClick={props.newMail}
      >
        Получить письмо
      </button>
    </div>
  );
}

export default Menu;
