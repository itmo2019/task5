import React from 'react';
import { Message } from './Message';

import '../../styles/mail-box/__input/mail-box__input.css';
import '../../styles/essay.css';

const MessagesList = ({ onCheckBoxChange, messages, onOpenMessage }) => {
  const messagesComponents = messages
    .map(message => (
      <Message
        message={message}
        key={message.id}
        onCheckBoxChange={onCheckBoxChange}
        onOpenMessage={onOpenMessage}
      />
    ))
    .reverse();

  return (
    <section id="messages-setion" className="messages-section">
      {messagesComponents}
      <div style={{ height: '50px' }} />
    </section>
  );
};

export default MessagesList;
