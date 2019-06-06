import React from 'react';
import classNames from 'classnames';

import styles from './button.module.css';

export const Button = ({ className, handleClick, disabled, type, children }) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={handleClick}
      disabled={disabled}
      type={type || 'action'}
    >
      {children}
    </button>
  );
};
