import React from 'react';
import { pure } from 'recompose';

import styles from './checkbox.module.css';

export const Checkbox = pure(({ className, id, handleChange, checked, disabled }) => {
  return (
    <div className={className}>
      <label className={styles.label} htmlFor={id}>
        <input
          className={styles.real_checkbox}
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          disabled={disabled}
          id={id}
        />
        <span className={styles.checkbox_view} />
      </label>
    </div>
  );
});
