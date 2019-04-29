import React, { Component } from 'react';

import './actionsBar.css';

export class ActionsBar extends Component {
  render() {
    return (
      <div className="actions-bar content__actions-bar">
        <ul className="actions-bar__nav-bar">
          <li className="actions-bar__write-message-action content_text-overflow_hidden">
            <a href="">Написать</a>
          </li>
          <li className="content_text-overflow_hidden">
            <a href="">Входящие</a>
          </li>
          <li className="content_text-overflow_hidden">
            <a href="">Отправленные</a>
          </li>
          <li className="content_text-overflow_hidden">
            <a href="">Удаленные</a>
          </li>
          <li className="content_text-overflow_hidden">
            <a href="">Спам</a>
          </li>
          <li className="content_text-overflow_hidden">
            <a href="">Черновики</a>
          </li>
          <li className="content_text-overflow_hidden">
            <a href="">Создать папку</a>
          </li>
        </ul>
      </div>
    );
  }
}
