import React from 'react';

import Nav from '../nav/nav';
import LetterBox from '../letterBox/letterBox';

import './mailMain.css';

export default function MailMain() {
  return (
    <main className="mail-main">
      <Nav className="mail-main__nav" />
      <LetterBox className="mail-main__letter-box" />
    </main>
  );
}
