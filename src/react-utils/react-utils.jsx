import { useCallback, useEffect, useMemo, useState } from 'react';

const parseWithDate = json =>
  JSON.parse(json, (key, value) => (key === 'date' ? new Date(value) : value));

export const useSessionStorage = (key, defaultValue) => {
  const [state, setState] = useState(parseWithDate(sessionStorage.getItem(key)) || defaultValue);
  useEffect(() => sessionStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, setState];
};

const callbackWithDependencies = func => callback => ({
  deps(...deps) {
    return func(callback, [...deps]);
  }
});

export const cb = callbackWithDependencies(useCallback);

export const mem = callbackWithDependencies(useMemo);
