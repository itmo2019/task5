import React, { useContext } from 'react';
import { cb, mem } from '../../../../react-utils';

import { Action } from '../action';
import { LettersContext } from '../../../letters-context';

export const ReadLettersAction = props => {
  const { getLetters, changeLetters } = useContext(LettersContext);
  const letters = mem(() => getLetters()).deps(getLetters);

  const handleAction = cb(() => {
    const ids = letters.filter(letter => letter.checked).map(letter => letter.id);
    changeLetters(letter => (ids.includes(letter.id) ? { unread: false } : {}));
  }).deps(letters, changeLetters);

  return (
    <Action {...props} handleAction={handleAction}>
      Прочитано
    </Action>
  );
};
