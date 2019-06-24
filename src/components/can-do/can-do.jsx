import React, { Component } from 'react';

import './can-do.css';

export class CanDo extends Component {
  constructor(props) {
    super(props);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  selectAll() {
    this.props.selectAll();
  }

  deleteLetter() {
    this.props.deleteLetter();
  }

  render() {
    return (
      <ul className="block-inner__can-do can-do">
        <input type="checkbox" id="can-do__highlight" onClick={this.selectAll} />
        <li className="can-do__resend">
          <a href="." className="can-do__links">
            Переслать
          </a>
        </li>
        <li className="can-do__delete">
          <div className="can-do__links" id="can-do__delete" onClick={this.deleteLetter}>
            Удалить
          </div>
        </li>
        <li className="can-do__make-spam">
          <a href="." className="can-do__links">
            Это спам!
          </a>
        </li>
        <li className="can-do__read-msgs">
          <a href="." className="can-do__links">
            Прочитано
          </a>
        </li>
      </ul>
    );
  }
}
