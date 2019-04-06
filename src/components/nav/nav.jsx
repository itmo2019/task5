import React from 'react';

import LinkBlock from '../linkBlock/linkBlock';

import './nav.css';

function ListItem(props) {
  return (
    <li className={`Nav__Item ${props.className}`}>
      <a className="Nav__ItemLink" href={props.link}>
        {props.title}
      </a>
    </li>
  );
}

export default function Nav(props) {
  /** @namespace props.classNameNav */
  /** @namespace props.classNameNavList */
  /** @namespace props.classNameLinkBlock */
  return (
    <nav className={`Nav ${props.classNameNav}`}>
      <LinkBlock className={props.classNameLinkBlock} title="Написать" />
      <ul className={`Nav__List ${props.classNameNavList}`}>
        <ListItem link="../../public/index.html" title="Входящие" className="Nav__Item_Select" />
        <ListItem link="../../public/index.html" title="Отправленные" />
        <ListItem link="../../public/index.html" title="Удалённые" />
        <ListItem link="../../public/index.html" title="Спам" />
        <ListItem link="../../public/index.html" title="Черновики" />
        <ListItem link="../../public/index.html" title="Создать папку" />
      </ul>
    </nav>
  );
}
