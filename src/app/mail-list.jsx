import React from 'react';
import { Letter } from './letter';

import '../index.css';
import '../blocks/mail-list.css';

export const MailList = ({ letters, toggleLetter }) => {
  return (
    <ul className="mail-list" id="mail-list">
      {letters.map(letter => {
        if (letter.new) {
          return <Letter letter={letter} toggleLetter={toggleLetter} key={letter.key} />;
        }

        return <Letter letter={letter} toggleLetter={toggleLetter} key={letter.key} />;
      })}
    </ul>
  );
};
