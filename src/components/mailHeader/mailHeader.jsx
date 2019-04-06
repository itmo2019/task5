import React from 'react';

import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';

import './mailHeader.css';

export default function MailHeader() {
  return (
    <header className="MailHeader">
      <Menu className="MailHeader__Menu" />
      <Logo className="MailHeader__Logo" />
      <Search className="MailHeader__Search" />
    </header>
  );
}
