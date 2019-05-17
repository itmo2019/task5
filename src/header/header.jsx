import React from 'react';
import Logo from '../logo/logo';
import SearchBar from '../search-bar/search-bar';
import BurgerMenuButton from '../burger-menu-button/burger-menu-button';
import './header.css';

function Header() {
  return (
    <header className="header page__header">
      <section className="page-title-container header__page-title-container">
        <BurgerMenuButton />
        <Logo />
      </section>
      <SearchBar />
    </header>
  );
}

export default Header;
