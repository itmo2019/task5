import React from 'react';

import Nav from '../nav/nav';
import LetterBox from '../letterBox/letterBox';

import './mailMain.css';

export default function MailMain() {
  return (
    <main className="MailMain">
      <Nav
        classNameNav="MailMain__Nav"
        classNameNavList="MailMain__NavList"
        classNameLinkBlock="MailMain__WriteButton"
      />
      <LetterBox className="MailMain__LetterBox" />
    </main>
  );
}
