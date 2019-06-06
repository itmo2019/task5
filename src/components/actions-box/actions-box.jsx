import React, { useContext } from 'react';
import classNames from 'classnames';
import { mem } from '../../react-utils';

import { Checkbox } from '../checkbox';
import { List } from '../list';
import { Action } from './actions';
import { DeleteLetterAction } from './actions/delete-letters-action';
import { ReadLettersAction } from './actions/read-letters-action';
import { LettersContext } from '../letters-context';

import styles from './actions-box.module.css';

export const ActionsBox = ({ className, disabled }) => {
  const { getLetters, changeLetters } = useContext(LettersContext);
  const letters = mem(() => getLetters()).deps(getLetters);

  const handleChange = event => {
    const { checked } = event.target;
    changeLetters(() => ({ checked }));
  };

  const checkboxChecked = mem(
    () => !disabled && letters.length > 0 && letters.every(letter => letter.checked)
  ).deps(letters);

  const checkboxEnabled = mem(() => !disabled && letters.length > 0).deps(letters);

  const actionsEnabled = mem(() => !disabled && letters.some(letter => letter.checked)).deps(
    letters
  );

  return (
    <header className={classNames(styles.actions_box, className)}>
      <Checkbox
        className={styles.checkbox}
        handleChange={handleChange}
        checked={checkboxChecked}
        disabled={!checkboxEnabled}
        id="actions-checkbox"
      />
      <List className={styles.actionsList}>
        <Action disabled={!actionsEnabled}>Переслать</Action>
        <DeleteLetterAction disabled={!actionsEnabled} />
        <Action disabled={!actionsEnabled}>Это спам!</Action>
        <ReadLettersAction disabled={!actionsEnabled} />
      </List>
    </header>
  );
};
