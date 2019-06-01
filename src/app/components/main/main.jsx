import * as React from 'react';
import './main.css'

import { Menu } from './menu/menu';
import { Content } from './content/content';
import * as utils from './letterUtils';
import { maxLettersNumberOnPage, minNewLetterTime, maxNewLetterTime, letterTimeDist } from './letterUtils';

export class Main extends React.Component {
  shortLastLetterTimeDist = false;

  constructor(props) {
    super(props);
    this.state = {
      letters: []
    };
    this.newMail = this.newMail.bind(this);
    this.remove = this.remove.bind(this);
    this.check = this.check.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.getNextTimeDist = this.getNextTimeDist.bind(this);
    setTimeout(() => {
      this.letterArrival();
    }, utils.randRange(minNewLetterTime, maxNewLetterTime));
  }

  remove() {
    const lettersList = this.state.letters;
    for (let i = 0; i < lettersList.length; i++) {
      if (lettersList[i].isChecked) {
        lettersList[i].remove = true;
      }
    }
    this.setState({ letters: utils.toDisplayed(lettersList) });
    setTimeout(() => {
      this.setState({
        letters: lettersList.filter(letter => !letter.isChecked)
      });
    }, 1000);
  }

  letterArrival() {
    this.newMail();
    const nextTimeDist = this.getNextTimeDist();
    setTimeout(() => {
      this.newMail();
    }, nextTimeDist);
  }

  newMail() {
    const newLetter = utils.genLetter();
    this.setState(state => {
      const newLetters = state.letters;
      if (newLetters.length >= maxLettersNumberOnPage) {
        for (let i = maxLettersNumberOnPage - 1; i < newLetters.length; i++) {
          newLetters[i].display = false;
        }
      }
      newLetters.unshift(newLetter);
      setTimeout(() => {
        newLetter.arrive = true;
        this.setState({
          letters: newLetters
        });
      }, 10);
      return { letters: newLetters };
    });
  }

  getNextTimeDist() {
    let nextTimeDist;
    if (this.shortLastLetterTimeDist) {
      nextTimeDist = utils.randRange(letterTimeDist, maxNewLetterTime);
      this.shortLastLetterTimeDist = false;
    } else {
      nextTimeDist = utils.randRange(minNewLetterTime, maxNewLetterTime);
      if (nextTimeDist < letterTimeDist) {
        this.shortLastLetterTimeDist = true;
      }
    }
    return nextTimeDist;
  }

  check(id) {
    this.setState(state => {
      const letterIndex = state.letters.findIndex(curLetter => curLetter.id.toString() === id);
      const newLetters = state.letters;
      newLetters[letterIndex].isChecked = !newLetters[letterIndex].isChecked;
      return { letters: newLetters };
    });
  };

  checkAll(isChecked) {
    this.setState(state => {
      const letters = state.letters;
      for (let i = 0; i < Math.min(state.letters.length, maxLettersNumberOnPage); i++) {
        letters[i] = state.letters[i];
        letters[i].isChecked = isChecked;
      }
      return { letters: letters };
    });
  };

  render() {
    return (
      <div className="main">
        <Menu newMail={this.newMail} />
        <Content
          letters={this.state.letters}
          remove={this.remove}
          checkAll={this.checkAll}
          check={this.check}
        />
      </div>
    );
  }
}
