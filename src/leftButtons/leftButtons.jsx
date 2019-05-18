import React, { Component } from 'react';

import './leftButtons.css';

export class LeftButtons extends Component {
  render() {
    return (
      <div className="left-buttons">
        <button className="left-buttons__write" onClick={this.props.newLetter}>
          <div className="left-buttons__write-text">Написать</div>
        </button>
        <a href="#" className="left-buttons__links">
          <div className="left-buttons__inbox">
            <div className="left-buttons__inbox-text">Входящие</div>
          </div>
        </a>
        <a href="#" className="left-buttons__links">
          <div className="left-buttons__button-text left-buttons__other">Отправленные</div>
        </a>
        <a href="#" className="left-buttons__links">
          <div className="left-buttons__button-text left-buttons__other">Удалённые</div>
        </a>
        <a href="#" className="left-buttons__links">
          <div className="left-buttons__button-text left-buttons__other">Спам</div>
        </a>
        <a href="#" className="left-buttons__links">
          <div className="left-buttons__button-text left-buttons__other">Черновики</div>
        </a>
        <a href="#" className="left-buttons__links">
          <div className="left-buttons__button-text left-buttons__other">Создать папку</div>
        </a>
      </div>
    );
  }
}
