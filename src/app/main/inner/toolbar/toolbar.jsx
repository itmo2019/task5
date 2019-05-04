import React from 'react';

import Checkbox from '../checkbox';

import './toolbar.css';

export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <Checkbox
        className="checkbox"
        id="checkbox__toolbar"
        checked={props.isAllSelected}
        onChangeCheckBox={props.selectAll}
      />
      <input
        className="toolbar__button"
        type="button"
        onClick={props.newMail}
        value="Новое письмо"
      />
      <input className="toolbar__button" type="button" value="Переслать" />
      <input
        className="toolbar__button"
        type="button"
        onClick={props.deleteMessage}
        value="Удалить"
      />
      <input className="toolbar__button" type="button" value="Это спам!" />
      <input className="toolbar__button" type="button" value="Прочитано" />
    </div>
  );
}
