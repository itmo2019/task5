import React, { Component } from 'react';

/* todo createMail on spam? */

import './Menu.css';

export class Menu extends Component {
  render() {
    const barTitles = ['Отправленные', 'Удалённые', 'Спам', 'Черновики', 'Создать папку'];

    let liElements = barTitles.map(titleStr => <BarItem title={titleStr} />);

    liElements.unshift(<BarItem title="Входящие" isHover={true} />);

    return (
      <div className="menu">
        <button className="menu__send-button">Написать</button>

        <ul className="menu__bar">{liElements}</ul>
      </div>
    );
  }
}

function BarItem(props) {
  let classStr = 'menu__bar-item' + (!!props.isHover ? ' menu_bar-item__hover' : '');
  return (
    <li className={classStr}>
      <a href="">{props.title}</a>
    </li>
  );
}
