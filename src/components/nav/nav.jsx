import React from 'react';
import classNames from 'classnames/bind';

import { List } from '../list';
import { Link } from '../link';
import { Button } from '../button';
import { Text } from '../text';

import styles from './nav.module.css';

const cx = classNames.bind(styles);

export const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <List className={styles.list} itemClassName={styles.item}>
        <LinkItem href="/inbox" isActive>
          Входящие
        </LinkItem>
        <LinkItem href="/sent">Отправленные</LinkItem>
        <LinkItem href="/delete">Удаленные</LinkItem>
        <LinkItem href="/spam">Спам</LinkItem>
        <LinkItem href="/draft">Черновики</LinkItem>
        <ButtonItem>Создать папку</ButtonItem>
      </List>
    </nav>
  );
};

const LinkItem = ({ href, isActive, children }) => (
  <Link className={cx({ clickable: true, active: isActive })} href={href}>
    <Text withOverflow>{children}</Text>
  </Link>
);

const ButtonItem = ({ children }) => (
  <Button className={classNames(styles.clickable)}>
    <Text withOverflow>{children}</Text>
  </Button>
);
