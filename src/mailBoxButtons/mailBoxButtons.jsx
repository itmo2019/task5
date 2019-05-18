import React, { Component } from 'react';

import './mailBoxButtons.css';

export class Buttons extends Component {
  render() {
    return (
      <div className="mail-box__upper-buttons">
        <label>
          <input
            type="checkbox"
            className="mail-box__white-square mail-box__main-white-square"
            onClick={this.props.changeCheckedAll}
            checked={this.props.ifCheck}
          />
        </label>
        <a href="#" className="mail-box__links">
          <div className="mail-box__upper-text mail-box__forward">Переслать</div>
        </a>
        <a href="#" className="mail-box__links">
          <button
            className="mail-box__upper-text mail-box__delete"
            onClick={this.props.setDeleteAnimation}
          >
            Удалить
          </button>
        </a>
        <a href="#" className="mail-box__links">
          <div className="mail-box__upper-text mail-box__this-is-spam">Это спам!</div>
        </a>
        <a href="#" className="mail-box__links">
          <div className="mail-box__upper-text mail-box__read">Прочитано</div>
        </a>
        <div className="mail-box__line" />
      </div>
    );
  }
}
