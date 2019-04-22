import React from 'react';

import './message.css';
import Checkbox from '../../checkbox';

export default function Message(props) {
  let bold;
  if (!props.isRead) {
    bold = 'message message_show message_not-read';
  } else {
    bold = 'message message_show';
  }

  return (
    <section>
      <div className={bold}>
        <Checkbox
          id={props.messageId}
          className="checkbox checkbox_message"
          checked={props.isChecked}
          onClick={props.onClick}
        />
        <span
          className="message__body"
          onClick={() => {
            props.handleOpen(props.messageId);
          }}
        >
          <img alt="message logo" className="message__logo" src={props.image} />
          <div className="message__contact"> {props.contact}</div>
          {!props.isRead ? (
            <div className="message__read-icon" />
          ) : (
            <div className="message__read-icon message__read-icon_invisible" />
          )}
          <div className="message__subject"> {props.subject} </div>
          <div className="message__date">{props.date}</div>
        </span>
      </div>
      <hr className="hr" />
    </section>
  );
}
