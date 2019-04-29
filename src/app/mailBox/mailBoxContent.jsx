import React, { Component } from 'react';

import './mailBoxContent.css';

import * as utils from '../../deletingMessage.js';


export class MailBoxContent extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: []};
    utils.deleteClick = utils.deleteClick.bind(this);
  }

  render() {
    return (
      <div className="mail-box-content">
        <input type="checkbox" id="message-click" />
        <div className="article mail-box-content__article">
          <label className="article__cross" htmlFor="message-click">
            X
          </label>
          <p className="article__content">
            Поздравляем! Доступ к вашему аккаунту был успешно восстановлен.
          </p>
        </div>
        <ul className="messages-list">
          <li className="message-snippet messages-list__message-snippet messages-snippet_bold">
            <input
              className="message-snippet__part message-snippet__message-tick content_checkbox"
              type="checkbox"
            />
            <label className="message-clickable-area" htmlFor="message-click">
              <img
                className="message-snippet__part message-snippet__avatar"
                src={require('../../static/avatars/ya-default.svg')}
                width="30"
                height="30"
                alt=""
              />
              <span className="message-snippet__part message-snippet__sender-name content_text-overflow_hidden">
                Яндекс.Почта
              </span>
              <div className="message-snippet__part message-snippet__message-item" />
              <span className="message-snippet__part message-snippet__message-topic content_text-overflow_hidden">
                Доступ к аккаунту восстановлен
              </span>
              <time
                className="message-snippet__part message-snippet__message-time content_text-overflow_hidden"
                dateTime="2018-08-06"
              >
                6 авг
              </time>
            </label>
          </li>
        </ul>
      </div>
    );
  }
}
