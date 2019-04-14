import React, { Component } from 'react';
import { YandexCheckbox } from '../../yandex-checkbox/yandex-checkbox';

import './inbox__message.css';
import './inbox__message-body.css';
import './inbox__message-read.css';
import './inbox__message-icon.css';
import './inbox__message-date.css';
import './inbox__message_bold.css';
import './inbox__message-author.css';
import './inbox__message-checkbox.css';

export class InboxMessage extends Component {
  authorImg;

  render() {
    return (
      <div className="inbox__message" id="message_5">
        <div className="inbox__message-checkbox">
          <YandexCheckbox />
        </div>
        <img className="inbox__message-icon" src={this.props.authorImg} alt="Автор" />
        <span className="inbox__message-author inbox__message_bold" id="message-author_5">
          Котик #472 из Яндекса
        </span>
        <div className="inbox__message-read" id="message-read_5" />
        <div className="inbox__message-body inbox__message_bold" id="message-body_5">
          kek
        </div>
        <time className="inbox__message-date" dateTime="2019-04-14T11:49:41.387Z">
          14 апр.
        </time>
      </div>
    );
  }
}
