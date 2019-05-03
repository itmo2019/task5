import React from 'react';

import './mail-body.css';

import { FoldersMenu } from './foldersMenu/folders-menu';
import { LettersWindow } from './lettersWindow/letters-window';

export function MailBody() {
  return (
    <main className="mail-body">
      <FoldersMenu />
      <LettersWindow />
    </main>
  );
}
