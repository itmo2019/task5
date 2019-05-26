import React, { Component } from 'react';

import './main.css';
import { Menu } from './left-menu';
import { Content } from './content';
import {
  generateDate,
  generateAuthor,
  generateText,
  generateRandomInt
} from './scripts/letterGeneratorUtils';

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
    this.deleteLetters = this.deleteLetters.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.removeAnimation = this.removeAnimation.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);
    this.newMail = this.newMail.bind(this);
    this.GenerateLetters();
  }

  removeLetterById = (letters, id) => {
    let newLetters = letters;
    newLetters = newLetters.filter(letter => letter.id !== id);
    let count = 0;
    for (let i = 0; i < newLetters.length; i++) {
      if (count < MAX_LETTERS) {
        newLetters[i].isVisible = true;
        count++;
      } else {
        newLetters[i].isVisible = false;
      }
    }
    return newLetters;
  };

  setChecked = (id, checked) => {
    const newChecked = checked;
    newChecked[id] = !newChecked[id];
    return newChecked;
  };

  changeCheckbox(id) {
    this.setState(state => {
      return { checkedLetterIds: this.setChecked(id, state.checkedLetterIds) };
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

  deleteLetters() {
    const oldLetters = this.state.letters;
    const newLetters = oldLetters.map(letter => {
      const newLetter = letter;
      if (this.state.checkedLetterIds[newLetter.id]) {
        newLetter.deleteAnimation = true;
      }
      return newLetter;
    });

    this.setState({
      letters: newLetters,
      isAllChecked: false
    });
  }

  async newMail() {
    const id = `${this.state.counter}`;
    this.setState(state => {
      return { counter: state.counter + 1 };
    });

    const author = generateAuthor();
    const text = await generateText();
    const subject = text[0].split('.')[0].substr(3);
    const date = generateDate();

    const newCheckedLetterIds = this.state.checkedLetterIds;
    newCheckedLetterIds[id] = false;
    const newLetters = this.state.letters;

    for (let i = 0; i < newLetters.length; i++) {
      newLetters[i].isVisible = i < MAX_LETTERS - 1;
    }

    this.setState(state => {
      return {
        letters: [
          {
            id,
            text,
            author,
            subject,
            date,
            isChecked: false,
            isVisible: true,
            addAnimation: true,
            deleteAnimation: false
          },
          ...state.letters
        ],
        checkedLetterIds: newCheckedLetterIds
      };
    });
  }

  deleteLetter(id) {
    this.setState(state => {
      return { letters: this.removeLetterById(state.letters, id) };
    });
  }

  removeAnimation(id) {
    const letters1 = this.state.letters;
    const newLetters = letters1.map(value => {
      const tmp = value;
      if (tmp.id === id) {
        tmp.addAnimation = false;
      }
      return tmp;
    });
    this.setState({
      letters: newLetters
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async GenerateLetters() {
    await this.sleep(100);
    await this.newMail();

    const fiveMinute = 300000;
    const maxTime = 600000;
    const minTime = 10;
    const time = Math.max(fiveMinute - this.last, generateRandomInt(minTime, maxTime));
    this.last = time;

    await this.sleep(time);
    this.GenerateLetters();
  }

  render() {
    return (
      <main className="main">
        <Menu newLetterButtonOnClick={this.newMail}/>
        <Content
          deleteLetters={this.deleteLetters}
          letters={this.state.letters}
          selectAll={this.selectAll}
          isAllChecked={this.state.isAllChecked}
          changeCheckbox={this.changeCheckbox}
          checkedLetterIds={this.state.checkedLetterIds}
          removeAnimation={this.removeAnimation}
          deleteLetter={this.deleteLetter}
        />
      </main>
    );
  }
}
