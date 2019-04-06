import React, { Component } from 'react';
import classNames from 'classnames';
import './main-menu.css';

function MainMenuItem(props) {
  const ref = props.ref === undefined ? '.' : props.ref;
  const text = props.text === undefined ? 'Элемент меню' : props.text;

  return (
    <li className="MainMenu__Item">
      <a className={classNames('MainMenu__Text', 'MainMenu__Item')} href={ref}>
        {text}
      </a>
    </li>
  );
}

export class MainMenu extends Component {
  render() {
    return (
      <ul className={classNames('MainMenu', this.props.className)}>
        <li className="MainMenu__Button">
          <a className={classNames('MainMenu__Text', 'MainMenu__Button')} href=".">
            Написать
          </a>
        </li>

        <MainMenuItem text="Входящие" />
        <MainMenuItem text="Отправленные" />
        <MainMenuItem text="Удаленные" />
        <MainMenuItem text="Спам" />
        <MainMenuItem text="Черновики" />
        <MainMenuItem text="Создать папку" />
      </ul>
    );
  }
}
