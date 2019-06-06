import React from 'react';

import { Button } from '../../button';

import styles from './action.module.css';

export const Action = ({ disabled, handleAction, children }) => (
  <Button className={styles.action} handleClick={handleAction} disabled={disabled}>
    {children}
  </Button>
);
