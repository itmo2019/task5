import React, { Component } from 'react';
import { block } from 'bem-cn';

import './message.css';
import logo from './yandex-logo.png';
import Check from '../check';

const b = block('message');

class Message extends Component {
  constructor(props) {
    super(props);

    this.openMessage = this.openMessage.bind(this);
  }

  openMessage() {
    this.props.openMsg(this.props.data);
  }

  componentDidMount() {
    this.props.updateSent();
  }

  onAnimationEnd(evt) {
    if (evt.animationName === 'delete-message') {
      this.props.delete();
    }
  }

  render() {
    const { data, updCheckMsg, first } = this.props;
    const { isRead, avatarSrc, deleteAnim, text, name, date, checked } = data;
    const avatar = avatarSrc === '' ? logo : avatarSrc;

    return (
      <li
        onAnimationEnd={(evt)=>this.onAnimationEnd(evt)}
        className={b({ new: first, deleted: deleteAnim }).toString()}
      >
        <div className={b('check').toString()}>
          <Check callback={updCheckMsg} checked={checked} />
        </div>
        <label
          onClick={this.openMessage}
          htmlFor="open-message"
          id="open-message-label"
          className="open-message-label"
        >
          <span className={b('content').toString()}>
            <span className={b('sender').toString()}>
              <img
                className={b('sender-picture').toString()}
                alt=""
                src={avatar}
                width="30"
                height="30"
              />
              <span className={b('sender-name', { notread: !isRead }).toString()}>{name}</span>
            </span>
            <span className={b('read-mark', { read: isRead.toString() }).toString()} />
            <span className={b('text').toString()}>
              <span className={b('text-inner', { notread: !isRead }).toString()}>{text}</span>
            </span>
            <span className={b('date').toString()}>
              <time dateTime="08-06">{date}</time>
            </span>
          </span>
        </label>
      </li>
    );
  }
}

export default Message;
