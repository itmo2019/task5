import React, { useContext } from 'react';
import { Action } from '../action';
import { LettersContext } from '../../../contexts/lettersContext';

export const DeleteLetterAction = props => {
  const { letters, changeLetter } = useContext(LettersContext);

  const handleAction = () => {
    const ids = letters.filter(letter => letter.checked).map(letter => letter.id);
    ids.forEach(id => changeLetter(id, () => ({ deleting: true })));
  };

  return <Action {...props} handleAction={handleAction} />;
};
