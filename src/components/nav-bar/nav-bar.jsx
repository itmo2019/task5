import React from 'react';

import YaLink from '../ya-link';

import './nav-bar.css';

function NavBar() {
  return (
    <ul id="nav-bar">
      <li>
        <YaLink text="Входящие" />
      </li>
      <li>
        <YaLink text="Отправленные" />
      </li>
      <li>
        <YaLink text="Удаленные" />
      </li>
      <li>
        <YaLink text="Спам" />
      </li>
      <li>
        <YaLink text="Черновики" />
      </li>
      <li>
        <YaLink text="Создать папку" />
      </li>
    </ul>
  );
}

export default NavBar;
