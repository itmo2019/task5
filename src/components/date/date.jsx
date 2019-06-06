import React from 'react';
import { pure } from 'recompose';
import classNames from 'classnames';
import { formatDatetime, toRussianDate } from '../../utils';
import styles from './date.module.css';

export const Date = pure(({ date, className }) => (
  <time className={classNames(styles.date, className)} dateTime={formatDatetime(date)}>
    {toRussianDate(date)}
  </time>
));
