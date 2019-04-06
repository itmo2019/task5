import React, { Component } from 'react';
import './message.css';
import classNames from 'classnames';
import avatar from '../../resources/img/yandex-logo.png';

export class Message extends Component {
  constructor(props) {
    super(props);
    this.unread = props.unread === undefined ? true : this.unread;
    this.avatar = props.avatar === undefined ? avatar : props.avatar;
    this.sender = props.sender === undefined ? 'Яндекс.Почта' : props.sender;
    this.topic = props.topic === undefined ? 'Доступ к аккаунту восстановлен' : props.topic;
    this.date =
      props.date === undefined
        ? new Date()
            .toLocaleDateString('ru-RU', {
              day: 'numeric',
              month: 'short'
            })
            .toString()
        : props.date;
  }

  render() {
    const wasRead = this.unread ? 'Message_Unread' : '';

    return (
      <li className={classNames('Message', this.props.className)}>
        <input className="Message__Checkbox" type="checkbox" />
        <img className="Message__Avatar" src={this.avatar} alt="Я" />
        <div className="Message__Sender">
          <span className={classNames('Message__Text', wasRead)}>{this.sender}</span>
        </div>
        <div className={classNames('Message__UnreadDot', wasRead)} />
        <div className="Message__Topic">
          <span className={classNames('Message__Text', wasRead)}>{this.topic}</span>
        </div>
        <div className="Message__Date">
          <span className={classNames('Message__Text', wasRead)}>{this.date}</span>
        </div>
      </li>
    );
  }
}
