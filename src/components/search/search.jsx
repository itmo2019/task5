import React from 'react';
import classNames from 'classnames';

import { Button } from '../button';

import { ReactComponent as CrossIcon } from './cross-icon.svg';

import styles from './search.module.css';

export const Search = ({ className }) => {
  return (
    <div className={classNames(styles.search, className)}>
      <input className={styles.input} type="text" placeholder="Поиск" />
      <Button>
        <CrossIcon className={styles.clearIcon} width={10} height={10} />
      </Button>
    </div>
  );
};
