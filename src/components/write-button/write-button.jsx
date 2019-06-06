import React, { useContext } from 'react';
import classNames from 'classnames';

import { Button } from '../button';
import { generateLetter } from '../../utils/generators';
import { LettersContext } from '../letters-context';

import styles from './write-button.module.css';

export const WriteButton = ({ className, children }) => {
  const { addLetter } = useContext(LettersContext);

  const addNewLetter = () => addLetter(generateLetter());

  return (
    <Button className={classNames(styles.writeButton, className)} handleClick={addNewLetter}>
      {children}
    </Button>
  );
};
