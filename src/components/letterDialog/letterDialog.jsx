import React, { Component } from 'react';

import { unmarkLetter } from '../../utils/handleLetterFunctions';

import './letterDialog.css';

export default class LetterDialog extends Component {
  static displayName = 'LetterDialog';

  constructor(props) {
    super(props);
    this.state = {
      className: 'LetterDialog',
      content: ''
    };

    props.updateHandleMailClick(this.handleMailClick);
  }

  handleMailClick = event => {
    const letter = event.target.closest('.Letter');

    this.setState(state => {
      const letterBody = letter.querySelector('.Letter__Body');
      return {
        className: `${state.className} LetterDialog_Visible`,
        content: letterBody.textContent
      };
    });
    unmarkLetter(letter);
  };

  handleLetterExitClick = () => {
    this.setState({ className: 'LetterDialog' });
  };

  render() {
    return (
      <section className={this.state.className}>
        <div className="LetterDialog__Exit" onClick={this.handleLetterExitClick}>
          ×
        </div>
        <div className="LetterDialog__Content">{this.state.content}</div>
      </section>
    );
  }
}
