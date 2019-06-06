import React from 'react';
import { pure } from 'recompose';
import classNames from 'classnames/bind';

import styles from './unread-flag.module.css';

const cx = classNames.bind(styles);

export const UnreadFlag = pure(({ visible }) => <div className={cx({ flag: true, hidden: !visible })} />);
