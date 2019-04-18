import React, { Component } from 'react';
import { block } from 'bem-cn';

import './full-message.css';
import logo from '../message/yandex-logo.png';

const b = block('full-message');

class FullMessage extends Component {
  render() {
    const { data, closeMsg } = this.props;
    const { avatarSrc } = data;

    return (
      <div className={b().toString()}>
        <div className={b('content').toString()}>
          <div className={b('close-container').toString()} onClick={closeMsg}>
            <label htmlFor="open-message">
              <span className={b('close').toString()}>╳</span>
            </label>
          </div>
          <div className={b('header').toString()}>
            <div className={b('sender').toString()}>
              <img
                id="full-message-img"
                alt=""
                className={b('img').toString()}
                src={avatarSrc === '' ? logo : avatarSrc}
                width="42"
                height="42"
              />
              <div className={b('sender-info').toString()}>
                <div id="full-message-sender" className={b('author').toString()}>
                  {data.name}
                </div>
                <div className={b('email').toString()}>wikipedia@yandex.ru</div>
              </div>
            </div>
            <div id="full-message-date" className={b('date').toString()}>
              <time dateTime="08-06">6 авг</time>
            </div>
          </div>
          <p id="full-message-text" className={b('text').toString()}>
            {data.text}
          </p>
        </div>
      </div>
    );
  }
}

export default FullMessage;
