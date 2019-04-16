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
  constructor(props) {
    super(props);
    this.img = props.img;
    this.author = props.author;
    this.id = props.id;
    this.date = InboxMessage.getCurrentDate();
    this.message = props.message;
  }

  static getCurrentDate() {
    const approxTime = new Date();
    const approxTimeISO = approxTime.toISOString();
    const approxTimeShort = approxTime.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short'
    });
    return [approxTimeISO, approxTimeShort];
  }

  render() {
    return (
      <div className="inbox__message" id={`message_${this.id}`}>
        <div className="inbox__message-checkbox">
          <YandexCheckbox id={this.id} />
        </div>
        <img className="inbox__message-icon" src={this.img} alt="Автор" />
        <span
          className="inbox__message-author inbox__message_bold"
          id={`message-author_${this.id}`}
        >
          {this.author}
        </span>
        <div className="inbox__message-read" id={`message-read_${this.id}`} />
        <div className="inbox__message-body inbox__message_bold" id={`message-body_${this.id}`}>
          {this.message}
        </div>
        <time className="inbox__message-date" dateTime={this.date[0]}>
          {this.date[1]}
        </time>
      </div>
    );
  }
}
