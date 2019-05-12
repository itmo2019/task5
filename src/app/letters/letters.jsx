import React, { Component } from 'react';

import './letters.css';
import { LettersHeader } from './lettersHeader';
import { LettersList } from './lettersList';
import { newMail } from './scripts/newLetterGenerator';

export class Letters extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nextLetterId: 0,
      letters: [],
      checkedLetters: {},
      isAllChecked: false
    };

    this.letterPlanner();
  }

  async letterPlanner() {
    await this.sleep(200);
    await newMail(this);

    const SEC = 1000;
    const MINUTE = 60 * SEC;
    await this.sleep(5 * MINUTE);
    await this.sleep(Math.random() * (10 * MINUTE) + 10);
    await newMail(this);

    this.letterPlanner();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  changeCheckboxStatus(id) {
    const updatedCheckedLetters = this.state.checkedLetters;
    updatedCheckedLetters[id] = !updatedCheckedLetters[id];
    this.setState({ checkedLetters: updatedCheckedLetters });
  }

  deleteLetters() {

    this.setState(state => {
      return {
        letters: state.letters.filter(letter => !state.checkedLetters[letter.id] && letter.isVisible),
        isAllChecked: false
      };
    });

    this.state.letters.map((letter, index) => {
      if (index < 30) {
        letter.isVisible = true;
      }
    });
  }

  selectAll() {
    const newCheckedLetterIds = this.state.checkedLetters;

    this.state.letters.forEach(letter => {
      if (letter.isVisible) {
        newCheckedLetterIds[letter.id] = !this.state.isAllChecked;
      }
    });

    this.setState(state => {
      return {
        isAllChecked: !state.isAllChecked,
        checkedLetters: newCheckedLetterIds
      };
    });
  }

  render() {
    return (
      <main className="letters">
        <LettersHeader
          isAllChecked={this.state.isAllChecked}
          deleteLetters={this.deleteLetters.bind(this)}
          selectAll={this.selectAll.bind(this)}
        />
        <div className="line"/>
        <LettersList
          nextLetterId={this.state.nextLetterId}
          letters={this.state.letters}
          checkedLetters={this.state.checkedLetters}
          isAllChecked={this.state.isAllChecked}
          changeCheckboxStatus={this.changeCheckboxStatus.bind(this)}
          deleteLetters={this.deleteLetters.bind(this)}
          selectAll={this.selectAll.bind(this)}
        />
      </main>
    );
  }
}
