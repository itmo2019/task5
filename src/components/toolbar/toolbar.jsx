import React from 'react';
import Check from '../check/check';
import './toolbar.css';

function ButtonItem(props) {
  return (
    <li className="toolbar__item">
      <input
        className="toolbar__button"
        type="button"
        value={props.value}
        onClick={props.onclick}
      />
    </li>
  );
}

export default function toolbar(props) {
  const { handleAddMailButtonClick, handleRemoveButtonClick, handleUnmarkButtonClick } = props;
  return (
    <ul className="toolbar">
      <li className="toolbar__item">
        <Check {...props} isMainCheckBox />
      </li>
      <ButtonItem value="Получить сообщение" onclick={handleAddMailButtonClick} />
      <ButtonItem value="Переслать" />
      <ButtonItem value="Удалить" onclick={handleRemoveButtonClick} />
      <ButtonItem value="Это спам!" />
      <ButtonItem value="Прочитано" onclick={handleUnmarkButtonClick} />
    </ul>
  );
}
