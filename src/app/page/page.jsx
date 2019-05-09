import React, { Component } from 'react';

import './page.css';
import { Header } from '../header/header';
import { Nav } from './nav';
import { Content } from '../content/content';
import {
  genAuthorImage,
  genAuthorName,
  genHeadText,
  genText,
  getHeadDate,
  getDate
} from '../scripts/scripts';

const MAX_LETTERS = 30;

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {},
      letters: [],
      count: 0,
      isSelectAll: false,
      text: []
    };

    this.newLetter = this.newLetter.bind(this);
    this.deleteMails = this.deleteMails.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
    this.setText = this.setText.bind(this);
    this.markRead = this.markRead.bind(this);
    this.setRead = this.setRead.bind(this);
    this.removeAddAnimation = this.removeAddAnimation.bind(this);
    this.makeDelete = this.makeDelete.bind(this);
    this.last = 0;
    this.newMail = this.newMail.bind(this);

    this.newMail();
  }

  setText(text) {
    this.setState({
      text
    });
  }

  setRead(id) {
    const newLetters = this.state.letters;
    const letters1 = newLetters.map(value => this.markRead(id, value));
    this.setState({
      letters: letters1
    });
  }

  markRead = (id, val) => {
    const val1 = val;
    if (val1.id === id) {
      val1.isRead = false;
    }
    return val1;
  };

  setChecked = (id, checked) => {
    const newChecked = checked;
    newChecked[id] = !newChecked[id];
    return newChecked;
  };

  setInvisible = letters => {
    const newLetters = letters;
    for (let i = MAX_LETTERS - 1; i < newLetters.length; i++) {
      newLetters[i].isVisible = false;
    }
    return newLetters;
  };

  selectAll() {
    const newChecked = this.state.checked;
    for (let i = 0; i < Math.min(this.state.letters.length, MAX_LETTERS); i++) {
      newChecked[this.state.letters[i].id] = !this.state.isSelectAll;
    }
    this.setState(state => {
      return {
        isSelectAll: !state.isSelectAll,
        checked: newChecked
      };
    });
  }

  makeDelete(id) {
    const tmp = this.state.letters;
    const newLetters = tmp.filter(letter => letter.id !== id);
    for (let i = 0; i < newLetters.length; i++) {
      if (i < MAX_LETTERS) {
        newLetters[i].isVisible = true;
      }
    }
    this.setState({
      letters: newLetters
    });
  }

  removeAddAnimation(id) {
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

  checkboxChange(id) {
    this.setState(state => {
      return { checked: this.setChecked(id, state.checked) };
    });
  }

  deleteMails() {
    const tmp = this.state.letters;
    const newLetters = tmp.map(letter => {
      const newLetter = letter;
      if (this.state.checked[newLetter.id]) {
        newLetter.deleteAnimation = true;
      }
      return newLetter;
    });

    this.setState({
      letters: newLetters,
      isSelectAll: false
    });
  }

  newLetter() {
    const id = `letter-id-${this.state.count}`;

    this.setState(state => {
      return { size: state.size + 1, count: state.count + 1 };
    });

    const authorName = genAuthorName();
    const authorImage = genAuthorImage();
    const headText = genHeadText();
    const letterText = genText();
    const date = new Date();
    const headTagDate = getDate(date);
    const headDate = getHeadDate(date);

    const newChecked = this.state.checked;
    newChecked[id] = false;

    this.setState(state => {
      return {
        letters: this.setInvisible(state.letters)
      };
    });

    this.setState(state => {
      return {
        letters: [
          {
            id,
            letterText,
            authorName,
            authorImage,
            headText,
            isChecked: false,
            isVisible: true,
            isRead: true,
            addAnimation: true,
            deleteAnimation: false,
            headDate,
            headTagDate
          }
        ].concat(state.letters),
        checked: newChecked
      };
    });
  }

  newMail() {
    this.newLetter();
    const fiveMinute = 300000;
    const maxTime = 600000;
    const minTime = 10;
    const time = Math.max(
      fiveMinute - this.last,
      Math.floor(Math.random() * (maxTime - minTime) + minTime)
    );
    this.last = time;
    setTimeout(this.newMail, time);
  }

  render() {
    return (
      <div className="page">
        <Header />
        <Nav newLetter={this.newLetter} />
        <Content
          deleteMails={this.deleteMails}
          letters={this.state.letters}
          selectAll={this.selectAll}
          isSelectAll={this.state.isSelectAll}
          checkboxChange={this.checkboxChange}
          checked={this.state.checked}
          text={this.state.text}
          setText={this.setText}
          setRead={this.setRead}
          removeAddAnimation={this.removeAddAnimation}
          makeDelete={this.makeDelete}
        />
      </div>
    );
  }
}
