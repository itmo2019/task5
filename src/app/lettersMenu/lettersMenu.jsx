import React, { Component } from 'react';

import './lettersMenu.css';

export class LettersMenu extends Component {
  render() {
    return (
      <ul className="lettersMenu">
        <li className="lettersMenu__horizontalPosition">
          <input
            className="lettersMenu__checkbox"
            type="checkbox"
            checked={this.props.selectAll}
            onChange={this.props.chooseAllLetters}
          />
        </li>
        <li className="lettersMenu__horizontalPosition">
          <button className="lettersMenu__button__textTitle lettersMenu__button__delLine">
            Переслать
          </button>
        </li>

        <li className="lettersMenu__horizontalPosition">
          <button
            className="lettersMenu__button__textTitle lettersMenu__button__delLine"
            onClick={this.props.markLettersToDelete}
          >
            Удалить
          </button>
        </li>

        <li className="lettersMenu__horizontalPosition">
          <button className="lettersMenu__button__textTitle lettersMenu__button__delLine">
            Это спам!
          </button>
        </li>

        <li className="lettersMenu__horizontalPosition">
          <button className="lettersMenu__button__textTitle lettersMenu__button__delLine">
            Прочитано
          </button>
        </li>
      </ul>
    );
  }
}
