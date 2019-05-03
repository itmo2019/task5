import React from 'react';

import './folders-menu.css';

export function FoldersMenu() {
  return (
    <div className="folders-menu">
      <button className="folders-menu__button-write" type="submit">
        Написать
      </button>
      <div className="folders-menu__folders-list">
        <button
          className="folders-menu__folders-list-button folders-menu__folders-list-button_selected"
          type="submit"
        >
          Входящие
        </button>
        <button className="folders-menu__folders-list-button" type="submit">
          Отправленные
        </button>
        <button className="folders-menu__folders-list-button" type="submit">
          Удаленные
        </button>
        <button className="folders-menu__folders-list-button" type="submit">
          Спам
        </button>
        <button className="folders-menu__folders-list-button" type="submit">
          Черновики
        </button>
        <button className="folders-menu__folders-list-button" type="submit">
          Создать папку
        </button>
      </div>
    </div>
  );
}
