import React from 'react';

import './toolbar.css';
import {checkAll, newMail, deleteMail} from '../message-list/message/message__actions';

import Checkbox from '../checkbox';

function ToolbarButton(props) {
  return (
    <input
      className="toolbar__button"
      type="button"
      value={props.value}
      id={props.id}
      onClick={props.onclick}
    />
  );
}

function Check() {
  return (
    <label>
      <Checkbox id="checkbox__toolbar" type="checkbox" />
    </label>
  );
}

export default function Toolbar() {
  return (
    <div className="toolbar">
      <Check onClick={checkAll(this)} />
      <ToolbarButton id="button__create-mail" onClick={newMail} value="Новое письмо" />
      <ToolbarButton className="toolbar__button" type="button" value="Переслать" />
      <ToolbarButton id="button__delete-mail" onClick={deleteMail} value="Удалить" />
      <ToolbarButton value="Это спам!" />
      <ToolbarButton value="Прочитано" />
      <hr className="hr" />
    </div>
  );
}
