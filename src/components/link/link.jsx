import React from 'react';
import { pure } from 'recompose';
import classNames from 'classnames';

import styles from './link.module.css';

export const Link = pure(props => {
  return (
    <a
      href={props.href}
      className={classNames(styles.link, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
});
