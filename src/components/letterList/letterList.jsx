import React, { Component } from 'react';

import Letter from '../letter/letter';

import LetterGenerator from '../../utils/letterGenerator';
import { getInt } from '../../utils/randomFunctions';
import { unmarkLetter } from '../../utils/handleLetterFunctions';

import './letterList.css';
import '../letter/letter.css';

export default class LetterList extends Component {
  static displayName = 'LetterList';

  MIN_TIMER_ADD_MAIL = 300000;

  MAX_TIMER_ADD_MAIL = 600001;

  MAX_MAIL_LIST_SIZE = 30;

  REMOVE_LETTER_TIME = 500;

  DELTA_TIME = 20;

  letterId = 0;

  letterGenerator = new LetterGenerator();

  constructor(props) {
    super(props);
    this.state = {
      curPage: 1,
      listLetters: []
    };

    props.updateAddLetter(this.newMail);
    props.updateRemoveLetter(this.removeLetters);
    props.updateUnmarkLetter(this.unmarkLetters);
    props.updateSelectAll(this.handleMainCheckBoxClick);
  }

  componentDidMount() {
    const self = this;
    this.timerOuterID = setTimeout(function run() {
      self.newMail();
      const timer = getInt(self.MIN_TIMER_ADD_MAIL, self.MAX_TIMER_ADD_MAIL);
      self.timerInnerID = setTimeout(run, timer);
    }, getInt(self.DELTA_TIME, self.MAX_TIMER_ADD_MAIL));
  }

  componentWillUnmount() {
    clearTimeout(this.timerOuterID);
    clearTimeout(this.timerInnerID);
  }

  getRandomLetter = updateSetHidden => {
    const authorName = this.letterGenerator.getAuthorName();
    return (
      <Letter
        key={this.letterId++}
        className="LetterList__Letter"
        authorName={authorName}
        authorLogo={this.letterGenerator.getAuthorLogo(authorName)}
        letterContent={this.letterGenerator.getLetterContent()}
        date={this.letterGenerator.getDate()}
        updateSetHidden={updateSetHidden}
        handleMailClick={this.props.handleMailClick}
      />
    );
  };

  newMail = () => {
    if (this.state.curPage * this.MAX_MAIL_LIST_SIZE <= this.state.listLetters.length) {
      this.state.listLetters[this.state.curPage * this.MAX_MAIL_LIST_SIZE - 1].setHidden(true);
    }
    this.setState(state => {
      const newLetter = {};
      const updateSetHidden = value => {
        newLetter.setHidden = value;
      };
      newLetter.letter = this.getRandomLetter(updateSetHidden);
      state.listLetters.unshift(newLetter);
      return { listLetters: state.listLetters };
    });
    document.body.querySelector('.Check__Input').checked = false;
  };

  doActionWithLetters = action => {
    const checkboxes = document.body.querySelectorAll('.Check__Input');
    let last = Math.min(checkboxes.length - 1, this.state.curPage * this.MAX_MAIL_LIST_SIZE);
    const first = (this.state.curPage - 1) * this.MAX_MAIL_LIST_SIZE + 1;
    for (let i = last; i >= first; i--) {
      if (checkboxes[i].checked) {
        action(checkboxes[i].closest('.Letter'), last++, i - 1);
      }
    }
  };

  removeAnimateLetter = (letter, newLetterIndex, letterIndex) => {
    if (newLetterIndex < this.state.listLetters.length) {
      this.state.listLetters[newLetterIndex].setHidden(false);
    }
    setTimeout(() => {
      letter.classList.add('Letter_Removed');
      setTimeout(() => {
        this.setState(state => {
          const copy = state.listLetters.slice();
          copy.splice(letterIndex, 1);
          return { listLetters: copy };
        });
      }, this.REMOVE_LETTER_TIME);
    }, this.DELTA_TIME);
  };

  removeLetters = () => {
    setTimeout(() => {
      document.body.querySelector('.Check__Input').checked = false;
    }, (this.REMOVE_LETTER_TIME * 2) / 3);
    this.doActionWithLetters(this.removeAnimateLetter);
  };

  unmarkLetters = () => {
    this.doActionWithLetters(unmarkLetter);
  };

  handleMainCheckBoxClick = () => {
    const checkboxes = document.body.querySelectorAll('.Check__Input');
    const checkAll = checkboxes[0];
    const size = Math.min(checkboxes.length, this.state.curPage * this.MAX_MAIL_LIST_SIZE + 1);
    for (let i = 1 + (this.state.curPage - 1) * this.MAX_MAIL_LIST_SIZE; i < size; i++) {
      checkboxes[i].checked = checkAll.checked;
    }
  };

  render() {
    return <ul id="LetterList">{this.state.listLetters.map(obj => obj.letter)}</ul>;
  }
}
