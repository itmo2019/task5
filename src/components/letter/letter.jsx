import React from 'react';

import './letter.css';
import YaCheckbox from '../ya-checkbox';

function Letter({ id, unread, avatar, sender, title, receiveTime, text, checked, check }) {
  const letterClass = unread ? 'unread' : '';
  const labelId = `letter_open${id}`;

  const onClick = () => {
    check(id);
  };

  return (
    <div className={`letters_mail ${letterClass}`}>
      <input id={labelId} className="letter_open" type="checkbox" />
      <div className="letter_head">
        <YaCheckbox checked={checked} check={onClick} />
        <img className="letters__mail_user-avatar" src={avatar} alt="avatar" />
        <span className="letters__mail_sender">{sender}</span>
        <input className="letters__mail_read-mark" type="checkbox" />
        <label className="letters__mail_message-title" htmlFor={labelId}>
          {title}
        </label>
        <span className="letters__mail_receive-time">{receiveTime}</span>
      </div>
      <div className="letter_message">
        <label htmlFor={labelId} className="letter_message_close">
          X
        </label>
        <p className="letter_message_text">{text}</p>
      </div>
    </div>
  );
}

export default Letter;
