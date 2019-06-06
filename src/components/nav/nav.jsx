import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './menu.module.css';

export class Menu extends Component {
  render() {
    return (
      <nav className={this.props.styles}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={classNames(styles.clickable, styles.link, styles.active)} href="/">
              Входящие
            </a>
          </li>
          <li className={styles.item}>
            <a className={classNames(styles.clickable, styles.link)} href="/">
              Отправленные
            </a>
          </li>
          <li className={styles.item}>
            <a className={classNames(styles.clickable, styles.link)} href="/">
              Удаленные
            </a>
          </li>
          <li className={styles.item}>
            <a className={classNames(styles.clickable, styles.link)} href="/">
              Спам
            </a>
          </li>
          <li className={styles.item}>
            <a className={classNames(styles.clickable, styles.link)} href="/">
              Черновики
            </a>
          </li>
          <li className={styles.item}>
            <button className={classNames(styles.clickable, styles.button)} type="button">
              Создать папку
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
