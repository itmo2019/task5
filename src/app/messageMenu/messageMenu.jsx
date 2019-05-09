import React, { Component } from 'react';

import './messageMenu.css';
import '../page/page.css';

export class MessageMenu extends Component {
  render() {
    return (
      <ul className="message-menu">
        <li className="message-menu__text">
          <button type="button" className="page__my-link message-menu__link">
            <p className="page__my-text">Переслать</p>
          </button>
        </li>
        <li className="message-menu__text">
          <button
            type="button"
            className="page__my-link message-menu__link"
            onClick={() => this.props.deleteMessages()}
          >
            <p className="page__my-text">Удалить</p>
          </button>
        </li>
        <li className="message-menu__text">
          <button type="button" className="page__my-link message-menu__link">
            <p className="page__my-text">Это спам!</p>
          </button>
        </li>
        <li className="message-menu__text">
          <button type="button" className="page__my-link message-menu__link">
            <p className="page__my-text">Прочитанно</p>
          </button>
        </li>
      </ul>
    );
  }
}
