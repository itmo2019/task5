import React, { Component } from 'react';

import './letters-window.css';

import { LettersWindowHeader } from './header/lettersWindowHeader';
import { LettersWindowBody } from './body/lettersWindowBody';
import { LettersWindowFooter } from './footer/lettersWindowFooter';
import { Line } from './line/line';
import { LetterCreation } from './letterCreation';

export class LettersWindow extends Component {
  stack = [];

  maxLettersOnPage = 30;

  constructor(props) {
    super(props);
    this.showLetter = this.showLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    this.removingLetters = this.removingLetters.bind(this);
    this.state = {
      letters: [],
      showLetterContent: [false, null]
    };
  }

  componentDidMount() {
    const THIS = this;
    setTimeout(function newMail() {
      const fiveMin = 5 * 60 * 1000;
      const rndNum = Math.floor(Math.random() * 5 * 60 * 1000);
      THIS.addNewLetter();
      setTimeout(newMail, fiveMin + rndNum);
    }, 1000);
  }

  addNewLetter() {
    const letter = LetterCreation();
    if (this.state.letters.length >= this.maxLettersOnPage) {
      this.stack.push(letter);
      return;
    }
    this.setState(state => ({
      letters: state.letters.concat(letter),
      showLetterContent: state.showLetterContent
    }));
  }

  showLetter(event) {
    event.stopPropagation();
    const letter = event.target;
    if (letter.querySelector('.letter-view__author') === null) {
      return;
    }
    const info = {
      author: letter.querySelector('.letter-view__author').textContent,
      theme: letter.querySelector('.letter-view__theme').textContent,
      content: letter.querySelector('.letter-view__content').textContent
    };
    this.setState(state => ({
      letters: state.letters,
      showLetterContent: [true, info]
    }));
  }

  closeLetter() {
    this.setState(state => ({
      letters: state.letters,
      showLetterContent: [false, null]
    }));
  }

  removingLetters() {
    if (this.state.showLetterContent[0]) {
      return;
    }
    const lettersBody = document.getElementById('lettersBody');
    for (const childNode of lettersBody.childNodes) {
      const checkbox = childNode.children[0].querySelector('.check__input');
      if (checkbox.checked) {
        childNode.classList.add('start-transition-opacity');
        childNode.addEventListener('transitionend', () => {
          const id = parseInt(checkbox.id, 10);
          const newLetters = this.state.letters.filter(letter => {
            return id !== letter.id;
          });
          if (newLetters.length < this.maxLettersOnPage && this.stack.length > 0) {
            newLetters.push(this.stack.pop());
          }
          this.setState(state => ({
            letters: newLetters,
            showLetterContent: state.showLetterContent
          }));
          document.getElementById('mainCheckbox').checked = false;
        });
      }
    }
  }

  render() {
    return (
      <div id="letters" className="letters-window">
        <LettersWindowHeader fooRemovingLetters={this.removingLetters} />
        <Line />
        <LettersWindowBody
          letters={this.state.letters}
          showLetterContent={this.state.showLetterContent}
          fooShowLetter={this.showLetter}
          fooCloseLetter={this.closeLetter}
        />
        <Line />
        <LettersWindowFooter />
      </div>
    );
  }
}
