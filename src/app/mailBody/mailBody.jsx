import React, { Component } from 'react';

import './mailBody.css';

import { FoldersMenu } from './foldersMenu/foldersMenu';
import { LettersWindow } from './lettersWindow/lettersWindow';

export class MailBody extends Component {
  render() {
    return (
      <main className="mail-body">
        <FoldersMenu />
        <LettersWindow />
      </main>
    );
  }
}
