import React, { Fragment, useContext } from 'react';
import { mem } from '../../react-utils';
import { createLatch } from '../../utils';

import { List } from '../list';
import { Letter } from '../letter';
import { NewLetter } from '../letter/new';
import { DeletedLetter } from '../letter/deleted';
import { LettersContext, LetterState } from '../letters-context';

export const Letters = ({ className }) => {
  const { getLetters, changeLetterByID, deleteLettersByIDs } = useContext(LettersContext);
  const letters = mem(() => getLetters()).deps(getLetters);

  const deletingLettersIDs = mem(() =>
    letters.filter(letter => letter.state === 3).map(letter => letter.id)
  ).deps(letters);

  const latch = createLatch(deletingLettersIDs.length, () =>
    deleteLettersByIDs(deletingLettersIDs)
  );

  const letterProps = letter => ({
    id: letter.id,
    unread: letter.unread,
    checked: letter.checked,
    content: letter.content
  });

  const commonLetterComponent = letter => <Letter {...letterProps(letter)} />;

  const newLetterComponent = letter => (
    <NewLetter
      handleAnimationEnd={() => changeLetterByID(letter.id, () => ({ state: 2 }))}
      {...letterProps(letter)}
    />
  );

  const deletedLetterComponent = letter => (
    <DeletedLetter handleAnimationEnd={() => latch.countDown()} {...letterProps(letter)} />
  );

  const letterComponent = letter => {
    switch (letter.state) {
      case LetterState.NEW:
        return newLetterComponent(letter);
      case LetterState.COMMON:
        return commonLetterComponent(letter);
      case LetterState.WILL_BE_DELETED:
        return deletedLetterComponent(letter);
      default:
        return null;
    }
  };

  const items = mem(() =>
    letters.map(letter => <Fragment key={letter.id}>{letterComponent(letter)}</Fragment>)
  ).deps(letters, letterComponent);

  return (
    <main className={className}>
      <List>{items}</List>
    </main>
  );
};
