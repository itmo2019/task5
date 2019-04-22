import React from 'react';

import './toolbar.css';

import Checkbox from '../checkbox';

function ToolbarButton(props) {
  return (
    <input
      className="toolbar__button"
      type="button"
      value={props.value}
      onClick={props.onClick}
    />
  );
}

export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <Checkbox
        className="checkbox"
        id="checkbox__toolbar"
        tick={props.isAllSelected}
        onClick={props.onClick}
      />
      <ToolbarButton onClick={props.newMail} value="Новое письмо" />
      <ToolbarButton value="Переслать" />
      <ToolbarButton onClick={props.deleteMessage} value="Удалить" />
      <ToolbarButton value="Это спам!" />
      <ToolbarButton value="Прочитано" />
      <hr className="hr" />
    </div>
  );
}
