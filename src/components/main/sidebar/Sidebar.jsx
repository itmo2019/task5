import React, { Component } from 'react';

import './Sidebar.css';


export class Sidebar extends Component {
  render() {
    const sidebarElements = ['Входящие', 'Отправленные', 'Удаленные', 'Спам', 'Черновики', 'Создать папку']
    const liElems = sidebarElements.map(elem => <BarItem key={elem} title={elem}/>)

    return (
      <div className="sidebar sidebar_position">
        <button className="sidebar__mail-send sidebar__mail-send_view">
          Написать
        </button>
        <ul className="sidebar__items">{liElems}</ul>
      </div>
    );
  }
}

function BarItem(props) {
  const className = 'sidebar__item sidebar__item_view';
  return (
    <li className={className}>
      <a href=""><p className="sidebar__item-paragraph">{props.title}</p></a>
    </li>
  );
}
