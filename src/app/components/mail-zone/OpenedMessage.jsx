import React, { useState } from 'react';

import '../../styles/close-cross/close-cross.css';
import '../../styles/message-item/__circle/message-item__circle.css';

const OpenedMessage = ({ message, onCloseMessage }) => {
  console.log(message);
  const getAuthorColor = author => {
    const hashCode = s => {
      return Math.abs(
        s.split('').reduce((a, b) => {
          return a * 32 - a + b.charCodeAt(0);
        }, 0)
      );
    };
    return `#${(hashCode(author) & 0xffffff).toString(16)}`;
  };
  return (
    <React.Fragment>
      <div
        className="close-cross"
        onClick={onCloseMessage}
        onKeyPress={onCloseMessage}
        tabIndex="0"
        role="button"
      >
        X
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '20px',
            marginBottom: '10px'
          }}
        >
          <span
            className="message-item__circle"
            style={{ backgroundColor: getAuthorColor(message.author) }}
          >
            {message.author}
          </span>
          <p style={{ fontWeight: '700', marginLeft: '20px' }}> {message.theme} </p>
        </div>
        {message.content}
      </div>
    </React.Fragment>
  );
};

export default OpenedMessage;
