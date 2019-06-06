import React, { Component } from 'react';

import { Letter } from '../../../letter';

import styles from './letters-list.module.css';

export class LettersList extends Component {
  render() {
    return (
      <div className={this.props.styles}>
        <ul className={styles.list}>
          {this.props.letters.map(letter => (
            <li key={letter.id}>
              <Letter styles={styles.letter} {...letter} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
