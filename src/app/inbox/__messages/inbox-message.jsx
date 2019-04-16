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
import '../../util.css';

export class InboxMessage extends Component {
  static getCurrentDate() {
    const approxTime = new Date();
    const approxTimeISO = approxTime.toISOString();
    const approxTimeShort = approxTime.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short'
    });
    return [approxTimeISO, approxTimeShort];
  }

  constructor(props) {
    super(props);
    this.date = InboxMessage.getCurrentDate();
  }

  render() {
    return (
      <div
        className={`inbox__message ${this.props.display ? '' : 'not-displayed'}`}
        id={`message_${this.props.id}`}
      >
        <div className="inbox__message-checkbox">
          <YandexCheckbox
            id={this.props.id}
            isChecked={this.props.isChecked}
            onChangeAction={this.props.onCheckAction}
          />
        </div>
        <img className="inbox__message-icon" src={this.props.img} alt="Автор" />
        <span
          className="inbox__message-author inbox__message_bold"
          id={`message-author_${this.props.id}`}
        >
          {this.props.author}
        </span>
        <div className="inbox__message-read" id={`message-read_${this.props.id}`} />
        <div
          className="inbox__message-body inbox__message_bold"
          id={`message-body_${this.props.id}`}
        >
          {this.props.message}
        </div>
        <time className="inbox__message-date" dateTime={this.date[0]}>
          {this.date[1]}
        </time>
      </div>
    );
  }
}
