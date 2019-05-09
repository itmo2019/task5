import React, { Component } from 'react';

import './messageMenu.css';
import '../page/page.css';

export class MessageMenu extends Component {
  render() {
    return (
      <ul className="message-menu">
        <li className="message-menu__text">
          <a href="." className="page__my-link message-menu__link">
            <p className="page__my-text">Переслать</p>
          </a>
        </li>
        <li className="message-menu__text">
          <a
            href="#"
            className="page__my-link message-menu__link"
            onClick={() => this.props.deleteMessages()}
          >
            <p className="page__my-text">Удалить</p>
          </a>
        </li>
        <li className="message-menu__text">
          <a href="." className="page__my-link message-menu__link">
            <p className="page__my-text">Это спам!</p>
          </a>
        </li>
        <li className="message-menu__text">
          <a href="." className="page__my-link message-menu__link">
            <p className="page__my-text">Прочитанно</p>
          </a>
        </li>
      </ul>
    );
  }
}
