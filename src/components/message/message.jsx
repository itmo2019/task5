import React, { Component } from 'react';

import './message.css';
import logo from './yandex-logo.png';
import Check from '../check';

export class Message extends Component {
  render() {
    const data = this.props.data;
    const readNameStyle = data.isRead ? '' : ' Message__SenderName_NotRead';
    const readTextStyle = data.isRead ? '' : ' Message__TextInner_NotRead';
    const readMarkStyle = data.isRead ? ' ReadMark_Read' : ' ReadMark_NotRead';
    const avatar = data.avatarSrc === '' ? logo : data.avatarSrc;
    const newMessageFlag = this.props.first ? ' Message_NewMessage' : '';
    const updCheckMsg = this.props.updCheckMsg;
    const deleteAnim = data.deleteAnim ? ' Message_DeletedMessage' : '';
    this.props.updateSent();

    return (
      <li
        onAnimationEnd={this.removeNewMessageAnimation}
        className={`Message${newMessageFlag}${deleteAnim}`}
      >
        <div className="Message__Check">
          <Check callback={updCheckMsg} checked={data.checked} />
        </div>
        <label
          onClick={() => {
            this.props.openMsg(data);
          }}
          htmlFor="open-message"
          id="open-message-label"
          className="open-message-label"
        >
          <span className="Message__Content">
            <span className="Message__Sender">
              <img className="Message__SenderPicture" alt="" src={avatar} width="30" height="30" />
              <span className={`Message__SenderName${readNameStyle}`}>{data.name}</span>
            </span>
            <span className={`ReadMark Message__ReadMark${readMarkStyle}`} />
            <span className="Message__Text">
              <span className={`Message__TextInner${readTextStyle}`}>{data.text}</span>
            </span>
            <span className="Message__Date">
              <time dateTime="08-06">{data.date}</time>
            </span>
          </span>
        </label>
      </li>
    );
  }
}

export default Message;
