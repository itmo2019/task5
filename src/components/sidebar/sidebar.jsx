import React from 'react';
import classNames from 'classnames';

import { WriteButton } from '../write-button';
import { Nav } from '../nav';

import styles from './sidebar.module.css';

export const Sidebar = ({ className }) => {
  return (
    <aside className={classNames(styles.sidebar, className)}>
      <WriteButton className={styles.button}>Написать</WriteButton>
      <Nav className={styles.nav} />
    </aside>
  );
};
