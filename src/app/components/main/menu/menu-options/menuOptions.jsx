import * as React from 'react';
import './menuOptions.css'

export class MenuOptions extends React.Component {
  static createMenuOption(name) {
    return (
      <li className="menu__option">
        <a className="menu__link" href={`${name}`}>
          {name}
        </a>
      </li>
    );
  };

  render() {
    const menuOptions = ['Отправленные', 'Удаленные', 'Спам', 'Черновики', 'Создать папку'];
    return (
      <ul className="menu__options">
        <li className="menu__option menu__incoming">
          <a className="menu__link" href="incoming">
            Входящие
          </a>
        </li>
        {menuOptions.map(name => MenuOptions.createMenuOption(name))}
      </ul>
    );
  }
}
