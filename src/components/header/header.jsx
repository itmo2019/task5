import React from 'react';
import classNames from 'classnames';

import { Search } from '../search';
import { Button } from '../button/button';
import { Link } from '../link';

import { ReactComponent as HamburgerIcon } from './hamburger.svg';
import { ReactComponent as YandexMailIcon } from './mail-yandex.svg';

import styles from './header.module.css';

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <Button className={styles.hamburger}>
        <HamburgerIcon width={20} height={17} />
      </Button>
      <Link className={styles.logo} href="/">
        <YandexMailIcon width={153} height={31} />
      </Link>
      <Search className={styles.search} />
    </header>
  );
};
