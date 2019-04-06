import React from 'react';

function MessageTemplate() {
  return  <template className="message-template" id="message-template">
    <div id="1554452980192" className="message to-create">
      <label className="select-message__checkbox-label" htmlFor="checkbox-1554452980192">
        <input type="checkbox" className="select-message__checkbox checkbox" id="checkbox-1554452980192"/>
      </label
      >
      <div className="message-info__sender-logo">П
      </div
      >
      <div className="message-info__sender bold">Петя
      </div
      >
      <div className="message-info__mark unread-mark"></div
      >
      <div className="message-info__subject bold">Hello from England
      </div
      >
      <div className="message-info__date-container">
        <div className="date-container__date">5 апр</div>
      </div>
    </div>
  </template>;
}

export default MessageTemplate;
