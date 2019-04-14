import React, { Component } from 'react';

import './mail-toolbar.css';
import './__button/mail-toolbar__button.css';
import './__element/mail-toolbar__element.css';

export class MailToolbar extends Component {
  render() {
    return (
      <article className="page-content__left-toolbar">
        <nav className="mail-toolbar">
          <button className="mail-toolbar__button" type="button">
            Написать
          </button>
          <div className="mail-toolbar__element">Входящие</div>
          <div className="mail-toolbar__element">Отправленные</div>
          <div className="mail-toolbar__element">Удалённые</div>
          <div className="mail-toolbar__element">Спам</div>
          <div className="mail-toolbar__element">Черновики</div>
          <div className="mail-toolbar__element">Создать папку</div>
        </nav>
      </article>
    );
  }
}
