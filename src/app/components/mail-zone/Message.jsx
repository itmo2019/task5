import React, { useEffect, useState } from 'react';
import '../../styles/mail-box/__input/mail-box__input.css';
import '../../styles/message-item/message-item.css';
import '../../styles/message-item/__checkbox/message-item__checkbox.css';
import '../../styles/message-item/__circle/message-item__circle.css';
import '../../styles/message-item/__circle/message-item__unread-circle.css';
import '../../styles/message-item/__text/message-item__text_content.css';
import '../../styles/message-item/__text/message-item__text_theme.css';
import '../../styles/message-item/__time/message-item__time.css';

export const Message = props => {
  const getAuthorColor = author => {
    const hashCode = s => {
      return Math.abs(
        s.split('').reduce((a, b) => {
          return a * 32 - a + b.charCodeAt(0);
        }, 0)
      );
    };
    // eslint-disable-next-line no-bitwise
    return `#${(hashCode(author) & 0xffffff).toString(16)}`;
  };

  const [messageOpacity, setMessageOpacity] = useState('0');

  useEffect(() => {
    setTimeout(() => setMessageOpacity('1'), 200);
  }, []);

  const markUnread = props.message.isRead ? '' : 'bold-text';

  return (
    <div className="message-item" style={{ opacity: messageOpacity }}>
      <input
        id={`select-message${props.message.id}`}
        type="checkbox"
        className="message-item__checkbox mail-box__input"
        checked={props.message.isSelected}
        onChange={() => props.onCheckBoxChange([props.message.id])}
      />{' '}
      <div
        style={{ display: 'inline', height: '42px' }}
        onClick={() => props.onOpenMessage(props.message.id)}
        onKeyPress={() => props.onOpenMessage(props.message.id)}
        role="button"
        tabIndex="0"
      >
        <span
          className="message-item__circle"
          style={{ backgroundColor: getAuthorColor(props.message.author) }}
        >
          {props.message.author}
        </span>{' '}
        <p className={`message-item__text_theme ${markUnread}`}> {props.message.theme} </p>{' '}
        {!props.message.isRead && <span className="message-item__unread-circle" />}{' '}
        <p className={`message-item__text_content ${markUnread}`}>
          {' '}
          {props.message.contentPreview}{' '}
        </p>{' '}
        <time className="message-item__time" dateTime={props.message.date}>
          6 авг
        </time>{' '}
      </div>
    </div>
  );
};
