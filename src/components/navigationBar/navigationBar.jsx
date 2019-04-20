import React from 'react';

import './navigationBar.css';

function NavigationBar(props) {
  const { addNewMail } = props;
  return (
    <nav className="navigation-bar">
      <button className="navigation-bar__button" type="button">
        Написать
      </button>
      <div className="navigation-bar__button-holder">
        <button className="navigation-bar__button" type="button" onClick={addNewMail}>
          Получить письмо
        </button>
      </div>
      <ul className="navigation-bar__refs-list">
        <li className="navigation-bar__item">
          <a className="navigation-bar__item-link" href="/public/index.html">
            Входящие
          </a>
        </li>
        <li className="navigation-bar__item">
          <a className="navigation-bar__item-link" href="/public/index.html">
            Отправленные
          </a>
        </li>
        <li className="navigation-bar__item">
          <a className="navigation-bar__item-link" href="/public/index.html">
            Удалённые
          </a>
        </li>
        <li className="navigation-bar__item">
          <a className="navigation-bar__item-link" href="/public/index.html">
            Спам
          </a>
        </li>
        <li className="navigation-bar__item">
          <a className="navigation-bar__item-link" href="/public/index.html">
            Черновики, и беловики, и боровики, и нирк.ифмо.вики, и другие интересные грибы!
          </a>
        </li>
        <li className="navigation-bar__item">
          <a className="navigation-bar__item-link" href="/public/index.html">
            Создать папку, и мамку, и тётьку, и дядьку, и всех родственников создать!
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
