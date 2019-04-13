import React from 'react';
import Search from '../search';
import ThreeStripes from '../threeStripes';
import Yandex from '../yandex';
import './header.css';

function Header() {
  return (
    <div>
      <ThreeStripes />
      <Yandex />
      <Search />
    </div>
  );
}

export default Header;
