import React, { createContext } from 'react';
import { useSessionStorage, cb, mem } from '../../react-utils';
import { mergeObjects } from '../../utils';

export const LetterState = Object.freeze({
  NEW: 1,
  COMMON: 2,
  WILL_BE_DELETED: 3
});

const createLetter = (letterContent, id) => ({
  id,
  state: LetterState.NEW,
  unread: true,
  checked: false,
  content: letterContent
});

export const LettersContext = createContext(null);

export const LettersProvider = ({ children }) => {
  const [state, setState] = useSessionStorage('letters', { counter: 0, letters: [] });

  const getLetters = cb(() => state.letters).deps(state);

  const getLetterByID = cb(id => getLetters().find(letter => letter.id === id)).deps(getLetters);

  const changeState = cb((counterFunc, lettersFunc) =>
    setState(({ counter, letters }) => ({
      counter: counterFunc(counter, letters),
      letters: lettersFunc(letters, counter)
    }))
  ).deps(setState);

  const setLetters = cb(lettersFunc => changeState(counter => counter, lettersFunc)).deps(
    changeState
  );

  const filterLetters = cb(pred => setLetters(letters => letters.filter(pred))).deps(setLetters);

  const mapLetters = cb(func =>
    setLetters(letters => letters.map(letter => mergeObjects(letter, func(letter))))
  ).deps(setLetters);

  const addLetter = cb(letterContent =>
    changeState(
      counter => counter + 1,
      (letters, counter) => [createLetter(letterContent, counter), ...letters]
    )
  ).deps(setLetters, createLetter);

  const deleteLetterByID = cb(id => filterLetters(letter => letter.id !== id)).deps(filterLetters);

  const deleteLettersByIDs = cb(ids => filterLetters(letter => !ids.includes(letter.id))).deps(
    filterLetters
  );

  const changeLetterByID = cb((id, func) =>
    mapLetters(letter => (letter.id === id ? func(letter) : letter))
  ).deps(mapLetters);

  const changeLetters = cb(func => mapLetters(func)).deps(mapLetters);

  const contextValue = mem(() => ({
    getLetters,
    getLetterByID,
    addLetter,
    deleteLetterByID,
    deleteLettersByIDs,
    changeLetterByID,
    changeLetters
  })).deps(
    getLetters,
    getLetterByID,
    addLetter,
    deleteLetterByID,
    deleteLettersByIDs,
    changeLetterByID,
    changeLetters
  );

  return <LettersContext.Provider value={contextValue}>{children}</LettersContext.Provider>;
};
