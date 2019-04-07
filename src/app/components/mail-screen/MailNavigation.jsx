import React, { Component } from 'react';

export class MailNavigation extends Component {
  render() {
    return (
      <div className="mail-navigation-wrapper">
      <div className="mail-navigation">
        <input 
          type="checkbox"
          className="mail-screen__checkbox"
          checked={this.props.isSelected}
          onChange={this.props.onSelectAll}
        />
        <button className="mail-navigation__nav-btn">
          Написать
        </button>
        <button 
          className="mail-navigation__nav-btn"
          onClick={this.props.onDelete}
        >
          Удалить
        </button>
        <button className="mail-navigation__nav-btn">
          Входящие
        </button>
        <button className="mail-navigation__nav-btn">
          Отправленные
        </button>
        <button className="mail-navigation__nav-btn">
          Удалённые
        </button>
        <button className="mail-navigation__nav-btn">
          Спам!
        </button>
        <button className="mail-navigation__nav-btn">
          Прочитано
        </button>
      </div>
      </div>
    )
  }
}
