import React from 'react';
import LinkBlock from '../linkBlock/linkBlock';
import './nav.css';

export default function Nav(props) {
  const items = [
    { id: 1, link: '/public/index.html', title: 'Входящие', isSelected: true },
    { id: 2, link: '/public/index.html', title: 'Отправленные' },
    { id: 3, link: '/public/index.html', title: 'Удалённые' },
    { id: 4, link: '/public/index.html', title: 'Спам' },
    { id: 5, link: '/public/index.html', title: 'Черновики' },
    { id: 6, link: '/public/index.html', title: 'Создать папку' }
  ];

  const listItems = items.map(item => (
    <li key={item.id} className={`nav__item ${item.isSelected ? 'nav__item_select' : ''}`}>
      <a className="nav__item-link" href={item.link}>
        {item.title}
      </a>
    </li>
  ));

  return (
    <nav className={`nav ${props.classNameNav}`}>
      <LinkBlock className={props.classNameLinkBlock} title="Написать" />
      <ul className={`nav__list ${props.classNameNavList}`}>{listItems}</ul>
    </nav>
  );
}
