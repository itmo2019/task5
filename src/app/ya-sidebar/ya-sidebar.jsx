import React, { Component } from 'react';

import './ya-sidebar.css';

export class YaSideBar extends Component {
  render() {
    return (
      <div className="ya-sidebar page__ya-sidebar">
        <ul className="ya-sidebar__nav-sidebar">
          <li className="ya-sidebar__compose-message page_text-overflow_hide">
            <a href="/">Написать</a>
          </li>
          <li className="ya-sidebar__action page_text-overflow_hide">
            <a href="/">Входящие</a>
          </li>
          <li className="ya-sidebar__action page_text-overflow_hide">
            <a href="/">Отправленные</a>
          </li>
          <li className="ya-sidebar__action page_text-overflow_hide">
            <a href="/">Удалённые</a>
          </li>
          <li className="ya-sidebar__action page_text-overflow_hide">
            <a href="/">Спам</a>
          </li>
          <li className="ya-sidebar__action page_text-overflow_hide">
            <a href="/">Черновики</a>
          </li>
          <li className="ya-sidebar__action page_text-overflow_hide">
            <a href="/">Создать папку</a>
          </li>
        </ul>
      </div>
    );
  }
}
