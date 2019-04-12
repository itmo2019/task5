import React, { Component } from 'react';

import './lettersWindowBody.css';
import { LetterView } from '../letterView/letterView';
import { Line } from '../line/line';
import { LetterCreation } from '../letterCreation';
import { LetterContent } from '../letterContent/letterContent';

export class LettersWindowBody extends Component {
  constructor(props) {
    super(props);
    this.showLetter = this.showLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    this.state = {
      letters: [],
      showLetterContent: [false, null]
    };
  }

  componentDidMount() {
    for (let i = 0; i < 5; i++) {
      this.addNewLetter();
    }
  }

  addNewLetter() {
    this.setState(state => ({
      letters: state.letters.concat(LetterCreation()),
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

  /* removingLetters() {
    const lettersBody = document.getElementById('lettersBody');
    const idList = [];
    for (const childNode of lettersBody.childNodes) {
      const checkbox = childNode.children[0].querySelector('.check__input');
      if (checkbox.checked) {
        idList.push(checkbox.id);
      }
    }
    this.setState(state => ({
      letters: state.letters.filter(letter => {
        return !idList.includes(letter.id);
      }),
      showLetterContent: state.showLetterContent
    }));
  } */

  render() {
    return (
      <div id="lettersBody" className="letters-window__body">
        {this.state.showLetterContent[0] ? (
          <LetterContent
            author={this.state.showLetterContent[1].author}
            theme={this.state.showLetterContent[1].theme}
            content={this.state.showLetterContent[1].content}
            closeLetter={this.closeLetter}
          />
        ) : (
          this.state.letters.map(letter => (
            <div className="letter-with-line" key={letter.id}>
              <LetterView
                checkboxId={letter.id}
                author={letter.author}
                theme={letter.theme}
                content={letter.content}
                showLetter={this.showLetter}
              />
              <Line />
            </div>
          ))
        )}
      </div>
    );
  }
}
