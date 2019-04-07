import React, { Component } from 'react';
import './short-message.css';
import classNames from 'classnames';
import avatar from '../../resources/img/yandex-logo.png';

export class ShortMessage extends Component {
  constructor(props) {
    super(props);
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
    this.state = {
      isVisible: true,
      wasRead: false
    };
    this.handleClick = props.handleClick;
    this.handleTick = props.handleTick;
  }

  render() {
    const fade = this.props.fadeOut ? 'FadeOut' : '';
    const isDisplayed = this.state.isVisible ? '' : 'ShortMessage_NonDisplayed';
    const wasRead = this.state.wasRead ? '' : 'ShortMessage_Unread';
    return (
      <div className={classNames('ShortMessage', this.props.className, isDisplayed, fade)}>
        <input className="ShortMessage__Checkbox" type="checkbox" onClick={this.handleTick} />
        <img
          className="ShortMessage__Avatar"
          src={this.avatar}
          alt="Я"
          onClick={this.handleClick}
          role="presentation"
        />
        <div className="ShortMessage__Sender" onClick={this.handleClick} role="presentation">
          <span className={classNames('ShortMessage__Text', wasRead)}>{this.sender}</span>
        </div>
        <div className={classNames('ShortMessage__UnreadDot', wasRead)} />
        <div className="ShortMessage__Topic" onClick={this.handleClick} role="presentation">
          <span className={classNames('ShortMessage__Text', wasRead)}>{this.topic}</span>
        </div>
        <div className="ShortMessage__Date" onClick={this.handleClick} role="presentation">
          <span className={classNames('ShortMessage__Text', wasRead)}>{this.date}</span>
        </div>
      </div>
    );
  }
}
