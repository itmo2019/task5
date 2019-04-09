import React from 'react';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import './mailHeader.css';

export default function MailHeader() {
  return (
    <header className="mail-header">
      <Menu className="mail-header__menu" />
      <Logo className="mail-header__logo" />
      <Search className="mail-header__search" />
    </header>
  );
}
