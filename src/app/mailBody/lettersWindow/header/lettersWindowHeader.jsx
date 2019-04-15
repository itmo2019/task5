import React, { Component } from 'react';

import './letters-window-header.css';
import { Checkbox } from '../checkbox/checkbox';

function mainCheckboxClicked() {
  const lettersBody = document.getElementById('lettersBody');
  const inputCheckbox = document.getElementById('mainCheckbox');
  if (lettersBody.querySelector('.content-letter') !== null) {
    return;
  }
  for (const childNode of lettersBody.childNodes) {
    childNode.children[0].querySelector('.check__input').checked = !inputCheckbox.checked;
  }
}

export class LettersWindowHeader extends Component {
  render() {
    const classNameForButtons = this.props.toolbarIsActive
      ? 'letters-window__header-button letters-window__header-button_actived'
      : 'letters-window__header-button';

    return (
      <header className="letters-window__header">
        <Checkbox
          id="mainCheckbox"
          fooForMainCheckbox={mainCheckboxClicked}
          foo={this.props.fooForCheckbox}
        />
        <button className={classNameForButtons} type="submit">
          Переслать
        </button>
        <button
          className={classNameForButtons}
          type="submit"
          onClick={this.props.fooRemovingLetters}
        >
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
}
