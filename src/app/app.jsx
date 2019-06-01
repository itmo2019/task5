import React, { Component } from 'react';
import burger from "./burger.svg";
import yandexLogo from "./yandex_logo.svg";
import mailLogo from "./mail_logo.svg";
import './style.css';
import { Main } from "./main";

import './app.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className="header_yandex">
            <img src={burger} className="burger" alt="img"/>
              <a href="http://www.yandex.ru">
                <img src={yandexLogo} className="yandex_logo" alt="img"/>
              </a>
              <a href="https://mail.yandex.ru">
                <img src={mailLogo} className="mail_logo" alt="img"/>
              </a>
          </div>
          <input type="search" placeholder="Поиск" className="search_rectangle"/>
        </header>
        <Main/>
      </div>
    );
  }
}
