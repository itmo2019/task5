import React from 'react';

import './messagesOptions.css';
import CheckAll from '../checkAll/checkAll';

function MessagesOptions(props) {
  const { removeMessages } = props;
  return (
    <ul className="messages-options">
      <li className="messages-options__button-holder">
        <CheckAll {...props} />
      </li>
      <li className="messages-options__button-holder">
        <input className="messages-options__button" type="button" value="Переслать" />
      </li>
      <li className="messages-options__button-holder">
        <input
          className="messages-options__button"
          type="button"
          value="Удалить"
          onClick={removeMessages}
        />
      </li>
      <li className="messages-options__button-holder">
        <input className="messages-options__button" type="button" value="Это спам!" />
      </li>
      <li className="messages-options__button-holder">
        <input className="messages-options__button" type="button" value="Прочитано" />
      </li>
    </ul>
  );
}

export default MessagesOptions;
