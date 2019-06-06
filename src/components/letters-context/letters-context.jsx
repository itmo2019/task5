import React, { createContext, useCallback, useMemo } from 'react';
import { useSessionStorage } from '../../react-utils';
import { generateLetter } from '../../utils/generators';

export const LettersContext = createContext(null);

export const LettersProvider = ({ children }) => {
  const [state, setState] = useSessionStorage('letters', { counter: 0, letters: [] });

  const onPage = useMemo(() => 1500, []);

  const merge = useCallback((obj1, obj2) => Object.assign({}, obj1, obj2), []);

  const createLetter = useCallback(
    (letterContent, id) => ({
      id,
      state: 1, // 1 - just received, 2 - usual, 3 - gonna be removed
      unread: true,
      checked: false,
      content: letterContent
    }),
    [state]
  );

  const getLetters = useCallback(() => state.letters.slice(0, onPage), [state]);

  const getLetterByID = useCallback(id => getLetters().find(letter => letter.id === id), [
    getLetters
  ]);

  const setStateSlice = useCallback(
    (counterFunc, lettersFunc) =>
      setState(prevState => ({
        counter: counterFunc(prevState.counter),
        letters: lettersFunc(prevState.letters.slice(0, onPage)).concat(
          prevState.letters.slice(onPage)
        )
      })),
    [setState]
  );

  const setLettersSlice = useCallback(
    lettersFunc => setStateSlice(counter => counter, lettersFunc),
    [setStateSlice]
  );

  const filterLetters = useCallback(
    predicate => setLettersSlice(letters => letters.filter(predicate)),
    [setLettersSlice]
  );

  const mapLetters = useCallback(
    func => setLettersSlice(letters => letters.map(letter => merge(letter, func(letter)))),
    [setLettersSlice]
  );

  const addLetter = useCallback(
    letterContent =>
      setStateSlice(
        counter => counter + 1,
        letters => [createLetter(letterContent, state.counter), ...letters]
      ),
    [setLettersSlice, createLetter]
  );

  const generateRandomLetters = useCallback(
    count =>
      setState(() => {
        const newState = { counter: 0, letters: [] };
        for (let i = 0; i < count; i++) {
          const newLetter = createLetter(generateLetter(), newState.counter);
          newLetter.state = 2;
          newState.letters.unshift(newLetter);
          newState.counter++;
        }
        return newState;
      }),
    [setState, createLetter, generateLetter]
  );

  const deleteLetterByID = useCallback(id => filterLetters(letter => letter.id !== id), [
    filterLetters
  ]);

  const deleteLettersByIDs = useCallback(ids => filterLetters(letter => !ids.includes(letter.id)), [
    filterLetters
  ]);

  const changeLetterByID = useCallback(
    (id, func) => mapLetters(letter => (letter.id === id ? func(letter) : letter)),
    [mapLetters]
  );

  const changeLetters = useCallback(func => mapLetters(func), [mapLetters]);

  const contextValue = useMemo(
    () => ({
      getLetters,
      getLetterByID,
      addLetter,
      deleteLetterByID,
      deleteLettersByIDs,
      changeLetterByID,
      changeLetters,
      generateRandomLetters
    }),
    [
      getLetters,
      getLetterByID,
      addLetter,
      deleteLetterByID,
      deleteLettersByIDs,
      changeLetterByID,
      changeLetters,
      generateRandomLetters
    ]
  );

  return <LettersContext.Provider value={contextValue}>{children}</LettersContext.Provider>;
};
