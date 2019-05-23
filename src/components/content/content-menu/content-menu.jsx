import React, { Component } from 'react';

import './content-menu.css';

import { Checker } from '../checker';

export class ContentMenu extends Component {
  render() {
    return (
      <div className="content-menu content-block__content-menu">
        <Checker
          checked={this.props.checked}
          checkedAll={this.props.checkedAll}
          clickF={this.props.clickF}
          parentMix="content-menu__check-view"
        />
        <span className="content-menu__button content-menu__button_first">Переслать</span>
        <span
          role="button"
          aria-hidden
          onClick={this.props.delF}
          className="content-menu__button"
          id="delete-message"
        >
          Удалить
        </span>
        <span className="content-menu__button">Это спам!</span>
        <span className="content-menu__button">Прочитано</span>
      </div>
    );
  }
}
