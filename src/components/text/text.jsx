import React from 'react';
import { pure } from 'recompose';
import classNames from 'classnames/bind';

import styles from './text.module.css';

const cx = classNames.bind(styles);

export const Text = pure(({ className, withOverflow, children }) => {
  return <span className={cx(className, { withOverflowEllipsis: withOverflow })}>{children}</span>;
});
