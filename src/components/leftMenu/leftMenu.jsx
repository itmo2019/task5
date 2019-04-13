import React from 'react';
import './leftMenu.css';
function LeftMenu() {
  return (
    <div className="left-buttons">
      <button className="left-buttons__write" type="button">
        Написать
      </button>
      <ul className="categories__ul">
        <li className="left-list">
          <button className="left-links" type="button">
            Входящие
          </button>
        </li>
        <li className="left-list">
          <button className="left-links" type="button">
            Отправленные
          </button>
        </li>
        <li className="left-list">
          <button className="left-links" type="button">
            Удаленные
          </button>
        </li>
        <li className="left-list">
          <button className="left-links" type="button">
            Спам
          </button>
        </li>
        <li className="left-list">
          <button className="left-links" type="button">
            Черновики
          </button>
        </li>
        <li className="left-list">
          <button className="left-links" type="button">
            Создать папку
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
