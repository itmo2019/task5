import React from 'react';
import './messageBoxHeader.css';

function MessageBoxHeader() {
  return (
    <div className="message-box__element">
      <input type="checkbox" className="checkbox" id="useless0" />
      <button className="message-buttons" type = "button">Переслать</button>
      <button className="message-buttons" type = "button">Удалить</button>
      <button className="message-buttons" type = "button">Это спам!</button>
      <button className="message-buttons" type = "button">Прочитано</button>
    </div>
  );
}

export default MessageBoxHeader;
