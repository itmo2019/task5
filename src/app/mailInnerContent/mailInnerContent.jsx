import React, { Component } from 'react';

import './mailInnerContent.css';
import { LeftMenu } from '../leftMenu';
import { Content } from '../content';
import {
  generateDate,
  generateName,
  generateContent,
  generateRandomCount
} from './scripts/letterGeneratorUtils';

const MAX_COUNT = 30;

export class MailInnerContent extends Component {
  static async generateLetter() {
    const author = generateName();
    const text = await generateContent();
    const subject = text[0].substr(0, 45);
    const date = generateDate();
    return { author, text, subject, date };
  }

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      letters: [],
      visibleLetters: [],
      selectAll: false,
      markedLetters: {}
    };
    this.deleteChosenLetter = this.deleteChosenLetter.bind(this);
    this.markLettersToDelete = this.markLettersToDelete.bind(this);
    this.switchLetterCheckbox = this.switchLetterCheckbox.bind(this);
    this.chooseAllLetters = this.chooseAllLetters.bind(this);
    this.newMail = this.newMail.bind(this);
    this.GenerateNewLetter();
  }

  deleteChosenLetter(id) {
    let count = 0;
    const tmpVisibleLetters = [];
    const tmpLetters = this.state.letters.filter(letter => letter.id !== id);
    tmpLetters.forEach(letter => {
      const tmp = letter;
      if (MAX_COUNT > count) {
        tmpVisibleLetters.push(tmp);
        count++;
      }
    });
    this.setState(() => {
      return { letters: tmpLetters, visibleLetters: tmpVisibleLetters };
    });
  }

  chooseAllLetters() {
    const tmpVisibleLetters = this.state.visibleLetters;
    const newMarkedLetters = this.state.markedLetters;
    for (let i = 0; i < tmpVisibleLetters.length; i++) {
      newMarkedLetters[tmpVisibleLetters[i].id] = !this.state.selectAll;
    }
    this.setState(state => {
      return {
        visibleLetters: tmpVisibleLetters,
        selectAll: !state.selectAll,
        markedLetters: newMarkedLetters
      };
    });
  }

  async newMail() {
    const { author, text, subject, date } = await MailInnerContent.generateLetter();
    const newMarkedLetters = this.state.markedLetters;
    const id = `${this.state.counter}`;
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
    newMarkedLetters[id] = false;
    const tmpLetters = this.state.letters;
    const tmpVisibleLetters = [];
    const letter = {
      id,
      author,
      subject,
      text,
      date,
      changeAnimation: false,
      isSelected: false
    };
    tmpVisibleLetters.push(letter);
    for (let i = 0; i < tmpLetters.length; i++) {
      if (i < MAX_COUNT - 1) {
        tmpVisibleLetters.push(tmpLetters[i]);
      }
    }
    this.setState(state => {
      return {
        visibleLetters: tmpVisibleLetters,
        letters: [letter].concat(state.letters),
        markedLetters: newMarkedLetters
      };
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async GenerateNewLetter() {
    const fiveMinute = 300000;
    const minTime = 10;
    const maxTime = 600000;
    let previous = 300000;
    await this.newMail();
    previous = Math.max(fiveMinute - previous, generateRandomCount(minTime, maxTime));
    await this.sleep(previous);
    this.GenerateNewLetter();
  }

  markLettersToDelete() {
    const tmpLetters = this.state.letters;
    const tmpVisibleLetters = this.state.visibleLetters;
    for (let i = 0; i < tmpLetters.length; i++) {
      if (this.state.markedLetters[tmpLetters[i].id]) {
        tmpVisibleLetters[i].changeAnimation = true;
        tmpLetters[i].changeAnimation = true;
      }
    }
    this.setState(() => {
      return {
        visibleLetters: tmpVisibleLetters,
        letters: tmpLetters,
        selectAll: false
      };
    });
  }

  switchLetterCheckbox(id) {
    const newMarkedLetters = this.state.markedLetters;
    newMarkedLetters[id] = !newMarkedLetters[id];
    this.setState(() => {
      return { markedLetters: newMarkedLetters };
    });
  }

  render() {
    return (
      <main className="mailInnerContent">
        <LeftMenu newMail={this.newMail}/>
        <Content
          deleteChosenLetter={this.deleteChosenLetter}
          markLettersToDelete={this.markLettersToDelete}
          chooseAllLetters={this.chooseAllLetters}
          switchLetterCheckbox={this.switchLetterCheckbox}
          visibleLetters={this.state.visibleLetters}
          selectAll={this.state.selectAll}
          markedLetters={this.state.markedLetters}
        />
      </main>
    );
  }
}
