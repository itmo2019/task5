import React from 'react';
import classNames from 'classnames';

import { Link } from '../link';

import styles from './footer.module.css';

export const Footer = ({ className }) => {
  return (
    <footer className={classNames(styles.footer, className)}>
      <Link className={styles.item} href="/">
        Помощь и обратная связь
      </Link>
      <Link className={styles.item} href="/">
        Реклама
      </Link>
      <span className={styles.item}>© 2001—2018, Яндекс</span>
    </footer>
  );
};
