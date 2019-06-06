import React, { Component } from 'react';

import { ActionsBox } from '../../actions-box';
import { Footer } from '../../footer';
import { LettersList } from './letters-list';

import styles from './letters-page.module.css';

export class LettersPageComponent extends Component {
  render() {
    return (
      <div className={styles.letters_page}>
        <ActionsBox styles={styles.actions_box} />
        <LettersList styles={styles.list} letters={this.props.letters} />
        <Footer styles={styles.footer} />
      </div>
    );
  }
}
