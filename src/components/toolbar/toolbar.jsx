import React from 'react';
import Check from '../check/check';
import './toolbar.css';

function ButtonItem(props) {
  return (
    <li className="toolbar__item">
      <input
        className={`toolbar__button ${
          props.isAnySelect || props.giveMsgButton ? 'toolbar__button_has-select-letter' : ''
        }`}
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
      <ButtonItem giveMsgButton value="Получить сообщение" onclick={handleAddMailButtonClick} />
      <ButtonItem {...props} value="Переслать" />
      <ButtonItem {...props} value="Удалить" onclick={handleRemoveButtonClick} />
      <ButtonItem {...props} value="Это спам!" />
      <ButtonItem {...props} value="Прочитано" onclick={handleUnmarkButtonClick} />
    </ul>
  );
}
