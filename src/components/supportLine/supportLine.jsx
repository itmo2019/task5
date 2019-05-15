import React from 'react';
import './supportLine.css';

const items = [
  { id: 1, title: 'Помощь и обратная связь', href: 'https://yandex.ru/support/mail/' },
  { id: 2, title: 'Реклама', href: 'https://yandex.ru/adv/' },
  { id: 3, title: '© 2001—2019,' },
  { id: 4, title: 'Яндекс', href: 'https://yandex.ru' }
];

const listItems = items.map(item =>
  item.href === undefined ? (
    <div key={item.id} className="support-line__item support-line__item_text">
      {item.title}
    </div>
  ) : (
    <a key={item.id} className="support-line__item support-line__item_link" href={item.href}>
      {item.title}
    </a>
  )
);

export default function SupportLine() {
  return <div className="support-line">{listItems}</div>;
}
