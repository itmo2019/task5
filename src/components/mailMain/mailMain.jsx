import React from 'react';

import Nav from '../nav/nav';
import LetterBox from '../letterBox/letterBox';

import './mailMain.css';

export default function MailMain() {
  return (
    <main className="mail-main">
      <Nav
        classNameNav="mail-main__nav"
        classNameNavList="mail-main__nav-list"
        classNameLinkBlock="mail-main__write-button"
      />
      <LetterBox className="mail-main__letter-box" />
    </main>
  );
}
