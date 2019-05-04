import React from 'react';

import './message.css';
import Checkbox from '../../checkbox';

export default function Message(props) {
  return (
    <section>
      <div className={`message ${!props.isRead ? 'message_not-read' : ''}`}>
        <Checkbox
          id={props.messageId}
          className="checkbox checkbox__message"
          checked={props.isChecked}
          onChangeCheckBox={() => {
            props.handleCheckBoxClick(props.messageId);
          }}
        />
        <span
          className="message__body"
          onClick={() => {
            props.openMessage(props.messageId);
          }}
        >
          <img alt="message logo" className="message__logo" src={props.image} />
          <div className="message__contact"> {props.contact}</div>
          <div
            className={`message__read-icon ${!props.isRead ? '' : 'message__read-icon_invisible'}`}
          />
          <div className="message__subject"> {props.subject} </div>
          <div className="message__date">{props.date}</div>
        </span>
      </div>
    </section>
  );
}
