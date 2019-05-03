import React from 'react';

import './letters-window-header.css';
import { Checkbox } from '../checkbox/checkbox';

export function LettersWindowHeader(props) {
  const classNameForButtons = props.bToolbar
    ? 'letters-window__header-button letters-window__header-button_actived'
    : 'letters-window__header-button';

  return (
    <header className="letters-window__header">
      <Checkbox main fooForMain={props.clickOnMainCheckbox} checked={props.bMainCheckbox} />
      <button className={classNameForButtons} type="submit">
        Переслать
      </button>
      <button className={classNameForButtons} type="submit" onClick={props.removeLetters}>
        Удалить
      </button>
      <button className={classNameForButtons} type="submit">
        Это спам!
      </button>
      <button className={classNameForButtons} type="submit">
        Прочитано
      </button>
    </header>
  );
}
