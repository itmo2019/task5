import React from 'react';
import './message-controls.css';

function MessageControls(props) {
  const handleEnterKey = (e, f) => {
    if (e.keyCode === 13) {
      f();
    }
  };

  return (
    <section className="messages-container__message-controls">
      <label htmlFor="message-controls-checkbox">
        <input
          type="checkbox"
          id="message-controls-checkbox"
          className="message__base-checkbox"
          onChange={() => props.onSelectAllChanged()}
          checked={props.selectAllChecked}
        />
        <div className="checkbox-container message-controls__checkbox-container">
          <div className="checkbox message-controls__checkbox" />
        </div>
      </label>
      <span
        className={`message-controls__item ${
          props.isActive ? 'message-controls__item_active' : ''
        }`}
        title="Переслать"
      >
        Переслать
      </span>
      <span
        className={`message-controls__item del-message-button ${
          props.isActive ? 'message-controls__item_active' : ''
        }`}
        title="Удалить"
        role="menuitem"
        tabIndex="0"
        onKeyDown={e => handleEnterKey(e, props.onDeleteSelected)}
        onClick={props.isActive ? props.onDeleteSelected : () => {}}
      >
        Удалить
      </span>
      <span
        className={`message-controls__item ${
          props.isActive ? 'message-controls__item_active' : ''
        }`}
        title="Это спам!"
      >
        Это спам!
      </span>
      <span
        className={`message-controls__item mark-as-read-button ${
          props.isActive ? 'message-controls__item_active' : ''
        }`}
        title="Прочитано"
        role="menuitem"
        tabIndex="0"
        onKeyDown={e => handleEnterKey(e, props.onMarkAsReadSelected)}
        onClick={props.isActive ? props.onMarkAsReadSelected : () => {}}
      >
        Прочитано
      </span>
    </section>
  );
}

export default MessageControls;
