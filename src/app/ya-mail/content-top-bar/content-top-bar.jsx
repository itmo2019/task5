import React, { Component } from 'react';

import './content-top-bar.css';

export class ContentTopBar extends Component {
  render() {
    return (
      <div className="content-top-bar ya-mail__content-top-bar">
        <ul className="content-top-bar__top-content-list">
          <li className="content-top-bar__action ya-mail__select-all">
            <input
              type="checkbox"
              checked={this.props.allSelected}
              className="page_checkbox ya-mail__select-all-check"
              onChange={() => this.props.selectAll()}
            />
          </li>
          <li className="content-top-bar__action page_text-overflow_hide">
            <a href="/">Переслать</a>
          </li>
          <li className="content-top-bar__action page_text-overflow_hide">
            <a href onClick={this.props.deleteSelected}>
              Удалить
            </a>
          </li>
          <li className="content-top-bar__action page_text-overflow_hide">
            <a href="/">Это спам!</a>
          </li>
          <li className="content-top-bar__action page_text-overflow_hide">
            <a href="/">Прочитанно</a>
          </li>
        </ul>
      </div>
    );
  }
}
