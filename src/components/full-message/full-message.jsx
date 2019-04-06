import React, { Component } from 'react';

import './full-message.css';
import logo from '../message/yandex-logo.png';

class FullMessage extends Component {
  constructor(props) {
    super(props);

    const self = this;
    this.state = {
      data: self.props.data
    };
  }

  render() {
    const data = this.props.data;
    const closeMsg = this.props.closeMsg;
    const avatarSrc = data.avatarSrc;

    return (
      <div className="FullMessage">
        <div className="FullMessage__Content">
          <div className="FullMessage__CloseContainer" onClick={() => {closeMsg()}}>
            <label htmlFor="open-message">
              <span className="FullMessage__Close">╳</span>
            </label>
          </div>
          <div className="FullMessage__Header">
            <div className="FullMessage__Sender">
              <img
                id="full-message-img"
                alt="full-message-img"
                className="FullMessage__Img"
                src={avatarSrc === '' ? logo : avatarSrc}
                width="42"
                height="42"
              />
              <div className="FullMessage__SenderInfo">
                <div id="full-message-sender" className="FullMessage__Author">
                  {data.name}
                </div>
                <div className="FullMessage__Email">wikipedia@yandex.ru</div>
              </div>
            </div>
            <div id="full-message-date" className="FullMessage__Date">
              <time dateTime="08-06">6 авг</time>
            </div>
          </div>
          <p id="full-message-text" className="FullMessage__Text">
            {data.text}
          </p>
        </div>
      </div>
    );
  }
}

export default FullMessage;
