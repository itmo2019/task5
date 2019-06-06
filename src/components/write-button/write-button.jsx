import React from 'react';
import classNames from 'classnames';

import { Button } from '../button';

import styles from './main-button.module.css';

export const MainButton = props => {
  return <Button className={classNames(styles.button, props.style)}>{props.children}</Button>;
};
