import React, { createContext, useState, useCallback, useMemo } from 'react';

export const ShowLetterContext = createContext(null);

export const ShowLetterProvider = ({ children }) => {
  const [state, setState] = useState({ isShowing: false, letterId: -1 });

  const showLetter = useCallback(id => setState(() => ({ isShowing: true, letterId: id })), [
    setState
  ]);

  const getShowingState = useCallback(() => state, [state]);

  const contextValue = useMemo(() => ({ showLetter, getShowingState }), [
    showLetter,
    getShowingState
  ]);

  return <ShowLetterContext.Provider value={contextValue}>{children}</ShowLetterContext.Provider>;
};
