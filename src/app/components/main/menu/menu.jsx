import * as React from 'react';
import './menu.css'
import { MenuOptions } from './menu-options/menuOptions';

export class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <button type="button" className="menu__button">
          Написать
        </button>
        <MenuOptions />
        <button
          type="button"
          className="menu__button"
          onClick={this.props.newMail}
        >
          Получить письмо
        </button>
      </div>
    );
  }
}
