import React from 'react';
import LinkBlock from '../linkBlock/linkBlock';
import './nav.css';

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
    <a className="nav__item_type_link" href={item.link}>
      {item.title}
    </a>
  </li>
));

export default function Nav(props) {
  const { className } = props;

  return (
    <nav className={`nav ${className}`}>
      <LinkBlock title="Написать" />
      <ul className="nav__list">{listItems}</ul>
    </nav>
  );
}
