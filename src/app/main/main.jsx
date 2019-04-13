import React, { Component } from 'react';

import './main.css';
import { Menu } from './menu';
import { Content } from './content';
import {
  generateDate,
  generateAuthorNameWithAbbr,
  generateText,
  generateRandomInt
} from './scripts/lettterGeneratorUtils';

const MAX_LETTERS = 30;

export class Main extends Component {
  last = 300000;

  constructor(props) {
    super(props);

    this.state = {
      letters: [],
      counter: 0,
      isAllChecked: false,
      checkedLetterIds: {}
    };

    this.recursiveGenerateLetters();
  }

  async newMail() {
    const id = `letter${this.state.counter}`;
    this.setState(state => {
      return { counter: state.counter + 1 };
    });

    const { author, authorAbbr } = generateAuthorNameWithAbbr();

    const text = await generateText();

    const subject = text[0].split('.')[0].substr(3);
    const date = generateDate();

    const isVisible = this.state.letters.length <= MAX_LETTERS;

    const newCheckedLetterIds = this.state.checkedLetterIds;
    newCheckedLetterIds[id] = false;
    this.setState(state => {
      return {
        letters: [
          {
            id: id,
            text: text,
            authorAbbr: authorAbbr,
            author: author,
            subject: subject,
            date: date,
            isChecked: false,
            isVisible: isVisible
          },
          ...state.letters
        ],
        checkedLetterIds: newCheckedLetterIds
      };
    });
  }

  selectAll() {
    const newCheckedLetterIds = this.state.checkedLetterIds;
    this.state.letters.forEach(letter => {
      if (letter.isVisible) {
        newCheckedLetterIds[letter.id] = !this.state.isAllChecked;
      }
    });
    this.setState(state => {
      return {
        isAllChecked: !state.isAllChecked,
        checkedLetterIds: newCheckedLetterIds
      };
    });
  }

  onCheckboxChange(id) {
    const newCheckedLetterIds = this.state.checkedLetterIds;
    newCheckedLetterIds[id] = !newCheckedLetterIds[id];
    this.setState({ checkedLetterIds: newCheckedLetterIds });
  }

  deleteLetters() {
    this.setState(state => {
      return {
        letters: state.letters.filter(letter => !state.checkedLetterIds[letter.id] && letter.isVisible),
        isAllChecked: false
      };
    });
    this.state.letters.map((letter, index) => {
      if (index < MAX_LETTERS) {
        letter.isVisible = true;
      }
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async recursiveGenerateLetters() {
    await this.sleep(100);
    await this.newMail();

    const fiveMinute = 300000;
    const maxTime = 600000;
    const minTime = 10;
    const time = Math.max(fiveMinute - this.last, generateRandomInt(minTime, maxTime));
    this.last = time;

    await this.sleep(time);
    this.recursiveGenerateLetters();
  }

  render() {
    return (
      <main className="main">
        <Menu newLetterButtonOnClick={this.newMail.bind(this)} />
        <Content
          letters={this.state.letters}
          deleteLetters={this.deleteLetters.bind(this)}
          checkedLetterIds={this.state.checkedLetterIds}
          onCheckboxChange={this.onCheckboxChange.bind(this)}
          isAllChecked={this.state.isAllChecked}
          selectAll={this.selectAll.bind(this)}
        />
      </main>
    );
  }
}
