import React, { Component } from 'react';

import './content.css';
import Mailbox from '../mailbox/mailbox';

export class Content extends Component {
  render() {
    return (
      <main className="Content">
        <div className="Content__left-toolbar">
          <div className="mail-toolbar">
            <button className="mail-toolbar__button">Написать</button>
            <button className="mail-toolbar__button">Получить письмо</button>
            <a className="mail-toolbar__element" href="">Входящие</a>
            <a className="mail-toolbar__element" href="">Отправленные</a>
            <a className="mail-toolbar__element" href="">Удалённые</a>
            <a className="mail-toolbar__element" href="">Спам</a>
            <a className="mail-toolbar__element" href="">Черновики</a>
            <a className="mail-toolbar__element" href="">Создать папку</a>
          </div>
        </div>
        <Mailbox />
      </main>
    );
  }
}

export default Content;
