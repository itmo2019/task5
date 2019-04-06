import React from 'react';

import Check from '../check/check';

import './toolbar.css';

function ButtonItem(props) {
  return (
    <li className="Toolbar__Item">
      <input
        className="Toolbar__Button"
        type="button"
        id={props.id}
        value={props.value}
        onClick={props.onclick}
      />
    </li>
  );
}

function CheckItem(props) {
  return (
    <li className="Toolbar__Item">
      <Check onclick={props.onclick} />
    </li>
  );
}

export default function Toolbar(props) {
  return (
    <ul className="Toolbar">
      <CheckItem onclick={props.selectAll} />
      <ButtonItem id="get-letter" value="Получить сообщение" onclick={props.addLetter} />
      <ButtonItem id="forward-letter" value="Переслать" />
      <ButtonItem id="remove-letter" value="Удалить" onclick={props.removeLetter} />
      <ButtonItem id="spam-letter" value="Это спам!" />
      <ButtonItem id="mark-read-letter" value="Прочитано" onclick={props.unmarkLetter} />
    </ul>
  );
}
