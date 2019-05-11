import React, { Component } from 'react';

import './mainContent.css';
import { Letters } from './letters/letters';
import { AllFunctions } from './all-functions/allFunctions';
import {
  generateText,
  randomDate,
  randomSender,
  randomTopic,
  randomInt
} from './scripts/generator';
import { Footer } from './footer/footer';

const LETTERS_ON_PAGE = 30;
let counter = 0;

export class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLetterOpened: false,
      openedLetterText: null,
      letters: [],
      isAllChecked: false,
      checkedLetters: {}
    };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.newMail = this.newMail.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.getRandomLetter = this.getRandomLetter.bind(this);
    this.openLetter = this.openLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);

    setTimeout(this.getRandomLetter, 100);
  }

  onCheckboxChange(id) {
    const newCheckedLetters = this.state.checkedLetters;
    this.setState(() => {
      newCheckedLetters[id] = !newCheckedLetters[id];
      return {
        isAllChecked: false,
        checkedLetters: newCheckedLetters
      };
    });
  }

  getRandomLetter() {
    const t = randomInt(10, 300000) + 300000;
    this.newMail();
    setTimeout(this.getRandomLetter, t);
  }

  selectAll() {
    const newCheckedLetters = this.state.checkedLetters;
    this.state.letters.forEach(letter => {
      if (letter.isVisible) {
        newCheckedLetters[letter.key] = !this.state.isAllChecked;
      }
    });
    this.setState(state => {
      return {
        isAllChecked: !state.isAllChecked,
        checkedLetters: newCheckedLetters
      };
    });
  }

  newMail() {
    counter++;
    const id = counter;
    const author = randomSender();

    const text = generateText(author);

    const topic = randomTopic();
    const date = randomDate();

    const newCheckedLetters = this.state.checkedLetters;
    newCheckedLetters[id] = false;
    const newLetters = this.state.letters;
    for (let i = 0; i < newLetters.length; i++) {
      if (i >= LETTERS_ON_PAGE) {
        newLetters[i].isVisible = false;
        newLetters[i].isChecked = false;
        newCheckedLetters[newLetters[i].key] = false;
      }
    }
    this.setState(() => {
      return {
        letters: [
          {
            key: `id${id}`,
            id: `id${id}`,
            text,
            author,
            topic,
            date,
            isChecked: false,
            isVisible: true
          },
          ...newLetters
        ],
        checkedLetters: newCheckedLetters,
        isAllChecked: false
      };
    });
  }

  deleteLetter() {
    const newLetters = this.state.letters.filter(letter => !this.state.checkedLetters[letter.key]);
    for (let i = 0; i < Math.min(newLetters.length, LETTERS_ON_PAGE + 1); i++) {
      newLetters[i].isVisible = true;
    }
    this.setState(() => {
      return {
        letters: newLetters,
        isAllChecked: false
      };
    });
  }

  openLetter(text) {
    this.setState({
      isLetterOpened: true,
      openedLetterText: text
    });
  }

  closeLetter() {
    this.setState({
      isLetterOpened: false,
      openedLetterText: null
    });
  }

  render() {
    return (
      <div className="main-block">
        <AllFunctions
          isLetterOpened={this.state.isLetterOpened}
          selectAll={this.selectAll}
          newMailOnClick={this.newMail}
          deleteLetter={this.deleteLetter}
          isChecked={this.state.isAllChecked}
        />
        <Letters
          letters={this.state.letters}
          isLetterOpened={this.state.isLetterOpened}
          checkedLetters={this.state.checkedLetters}
          openLetter={this.openLetter}
          closeLetter={this.closeLetter}
          openedLetterText={this.state.openedLetterText}
          onCheckboxChange={this.onCheckboxChange}
        />
        <Footer />
      </div>
    );
  }
}
