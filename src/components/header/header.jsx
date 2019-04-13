import React from 'react';

import YaService from '../ya-services';
import YaSearch from '../ya-search';
import MailLogo from '../mail-logo';

import './header.css';

function Header() {
  return (
    <header>
      <YaService />
      <MailLogo />
      <YaSearch />
    </header>
  );
}

export default Header;
