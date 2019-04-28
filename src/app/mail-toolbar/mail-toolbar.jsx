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
          <a className="mail-toolbar__element" href="https://mail.yandex.ru#inbox">
            Входящие
          </a>
          <a className="mail-toolbar__element" href="https://mail.yandex.ru#sent">
            Отправленные
          </a>
          <a className="mail-toolbar__element" href="https://mail.yandex.ru#trash">
            Удалённые
          </a>
          <a className="mail-toolbar__element" href="https://mail.yandex.ru#spam">
            Спам
          </a>
          <a className="mail-toolbar__element" href="https://mail.yandex.ru#draft">
            Черновики
          </a>
          <a className="mail-toolbar__element" href="https://mail.yandex.ru#folder">
            Создать папку
          </a>
        </nav>
      </article>
    );
  }
}
