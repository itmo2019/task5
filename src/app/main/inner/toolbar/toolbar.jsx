import React from 'react';

import './toolbar.css';

import Checkbox from '../checkbox';

function ToolbarButton(props) {
  return (
    <input className="toolbar__button" type="button" value={props.value} id={props.id} onClick={props.onclick}/>
  )
}

function Check(props) {
  return (
    <label>
      <Checkbox id="checkbox__toolbar" type="checkbox" />
    </label>
  );
}

export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <Check />
      <ToolbarButton
        id="button__create-mail"
        onClick={props.newMail}
        value="Новое письмо"
      />
      <ToolbarButton className="toolbar__button" type="button" value="Переслать" />
      <ToolbarButton
        id="button__delete-mail"
        onClick={props.deleteMail}
        value="Удалить"
      />
      <ToolbarButton value="Это спам!" />
      <ToolbarButton value="Прочитано" />
      <hr className="hr" />
    </div>
  );
}
