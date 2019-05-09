import React, { Component } from 'react';

import './page.css';

export class Nav extends Component {
  render() {
    return (
      <nav className="page__navigation">
        <button
          className="page__navigation-write-button"
          type="button"
          onClick={this.props.newLetter}
        >
          <p className="page__navigation-write-text">Написать</p>
        </button>
        <ul className="page__navigation-list">
          <li>
            <a href="." className="page__navigation-link">
              <div className="page__navigation-content page__navigation-content_current">
                <div className="page__navigation-text page__my-text page__navigation-text_current">
                  Входящие
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="." className="page__navigation-link">
              <div className="page__navigation-content">
                <div className="page__navigation-text page__my-text">Отправленные</div>
              </div>
            </a>
          </li>
          <li>
            <a href="." className="page__navigation-link">
              <div className="page__navigation-content">
                <div className="page__navigation-text page__my-text">Удаленные</div>
              </div>
            </a>
          </li>
          <li>
            <a href="." className="page__navigation-link">
              <div className="page__navigation-content">
                <div className="page__navigation-text page__my-text">Спам</div>
              </div>
            </a>
          </li>
          <li>
            <a href="." className="page__navigation-link">
              <div className="page__navigation-content">
                <div className="page__navigation-text page__my-text">Черновики</div>
              </div>
            </a>
          </li>
          <li>
            <a href="." className="page__navigation-link">
              <div className="page__navigation-content">
                <div className="page__navigation-text page__my-text">Создать папку</div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
