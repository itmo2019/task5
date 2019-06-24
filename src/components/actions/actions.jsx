import React, { Component } from 'react';

import './actions.css';

export class Actions extends Component {
  constructor(props) {
    super(props);
    this.addLetter = this.addLetter.bind(this);
  }

  addLetter() {
    this.props.addLetter();
  }

  render() {
    return (
      <div className="actions">
        <ul>
          <li>
            <input
              type="button"
              id="actions__button-write"
              onClick={this.addLetter}
              name="write"
              value="Написать"
            />
          </li>
          <a href="." className="actions__acts">
            <li className="actions__not-writing actions__msgs-income">Входящие</li>
          </a>
          <a href="." className="actions__acts">
            <li className="actions__not-writing">Отправленные</li>
          </a>
          <a href="." className="actions__acts">
            <li className="actions__not-writing">Удалённые</li>
          </a>
          <a href="." className="actions__acts">
            <li className="actions__not-writing">Спам</li>
          </a>
          <a href="." className="actions__acts">
            <li className="actions__not-writing">Черновики</li>
          </a>
          <a href="." className="actions__acts">
            <li className="actions__not-writing">Создать папку</li>
          </a>
        </ul>
      </div>
    );
  }
}
