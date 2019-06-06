import React from 'react';
import classNames from 'classnames';

import styles from './list.module.css';

export const List = ({ className, itemClassName, children }) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {React.Children.map(children, child => (
        <li className={itemClassName}>{child}</li>
      ))}
    </ul>
  );
};
