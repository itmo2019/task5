import React from 'react';

import Letter from '../letter/letter';

import {
  generateAuthorName,
  generateAuthorLogo,
  getRandomFromRange,
  generateLetter
} from '../../scripts/script';

import './lettersList.css';
import '../letter/letter.css';

function minutesToMillis(minutes) {
  return 1000 * 60 * minutes;
}

const MIN_NEW_LETTER_TIME = 10;

const MAX_NEW_LETTER_TIME = minutesToMillis(10);

const LETTER_WINDOW_SIZE = 10;

const MESSAGES_PER_PAGE = 5;

const ANIMATION_TIME = 250;

function checkboxAllClicked() {
  const checkboxes = document.body.querySelectorAll('.Checkbox__Input');
  for (let i = 1; i < Math.min(checkboxes.length, MESSAGES_PER_PAGE + 1); i++) {
    checkboxes[i].checked = checkboxes[0].checked;
  }
}

class LettersList extends React.Component {
  /*
  Монотонно увеличивающиеся при каждом получении сообщения логические часы
   */
  lamportClock = 0;

  lastTimingWasLessThanWindowSize = false;

  constructor(props) {
    super(props);
    this.state = {
      lettersState: []
    };

    this.generateLetter = this.generateLetter.bind(this);
    this.newMail = this.newMail.bind(this);
    this.removeMessageWithAnimation = this.removeMessageWithAnimation.bind(this);
    this.removeMarkedMessages = this.removeMarkedMessages.bind(this);
    this.handleMainCheckBoxClick = checkboxAllClicked.bind(this);

    props.updateAddLetter(this.newMail);
    props.updateRemoveLetter(this.removeMarkedMessages);
    props.updateSelectAll(this.handleMainCheckBoxClick);
  }

  componentDidMount() {
    const self = this;

    function run() {
      self.newMail();
      let randomTiming = getRandomFromRange(MIN_NEW_LETTER_TIME, MAX_NEW_LETTER_TIME);
      if (randomTiming < LETTER_WINDOW_SIZE) {
        if (self.lastTimingWasLessThanWindowSize) {
          self.lastTimingWasLessThanWindowSize = false;
          randomTiming = getRandomFromRange(LETTER_WINDOW_SIZE, MAX_NEW_LETTER_TIME);
        } else {
          self.lastTimingWasLessThanWindowSize = true;
        }
      } else {
        self.lastTimingWasLessThanWindowSize = false;
      }
      setTimeout(run, randomTiming);
    }

    setTimeout(run, getRandomFromRange(20, MAX_NEW_LETTER_TIME));
  }

  generateLetter(updateSetHidden) {
    const authorName = generateAuthorName();
    const letter = generateLetter();
    const authorLogo = generateAuthorLogo();
    const messageNumber = this.lamportClock;
    ++this.lamportClock;
    return (
      <Letter
        key={messageNumber}
        className="LetterList__Letter"
        authorName={authorName}
        authorLogo={<img className="Letter__AuthorLogo" src={authorLogo} alt="Author logo" />}
        letterContent={letter}
        date="22 фев."
        updateSetHidden={updateSetHidden}
        handleMailClick={this.props.handleMailClick}
      />
    );
  }

  newMail() {
    if (this.state.lettersState.length >= MESSAGES_PER_PAGE) {
      this.state.lettersState[MESSAGES_PER_PAGE - 1].setHidden(true);
    }
    const newLetter = {};
    const updateSetHidden = value => {
      newLetter.setHidden = value;
    };
    newLetter.letter = this.generateLetter(updateSetHidden);

    const newLettersList = [newLetter];
    this.setState(state => {
      for (let i = 0; i < state.lettersState.length; i++) {
        newLettersList.push(state.lettersState[i]);
      }
      return { lettersState: newLettersList };
    });
    document.body.querySelectorAll('.Checkbox__Input')[0].checked = false;
  }

  removeMessageWithAnimation(letter, newLetterIndex, letterIndex) {
    const self = this;
    if (newLetterIndex < this.state.lettersState.length) {
      this.state.lettersState[newLetterIndex].setHidden(false);
    }

    function animateImpl() {
      letter.classList.add('Letter_Removed');

      function animateImplImpl() {
        self.setState(state => {
          const copy = state.lettersState.slice();
          copy.splice(letterIndex, 1);
          return { lettersState: copy };
        });
      }

      setTimeout(animateImplImpl, ANIMATION_TIME);
    }

    setTimeout(animateImpl, 20);
  }

  removeMarkedMessages() {
    const self = this;
    function removeImpl() {
      document.body.querySelectorAll('.Checkbox__Input')[0].checked = false;
      const checkboxes = document.body.querySelectorAll('.Checkbox__Input');
      let last = Math.min(checkboxes.length - 1, MESSAGES_PER_PAGE);
      for (let i = last; i >= 1; i--) {
        if (checkboxes[i].checked) {
          self.removeMessageWithAnimation(checkboxes[i].closest('.Letter'), last++, i - 1);
        }
      }
    }

    setTimeout(removeImpl, ANIMATION_TIME);
  }

  render() {
    const letters = [];
    for (let i = 0; i < this.state.lettersState.length; i++) {
      letters.push(this.state.lettersState[i].letter);
    }
    return <ul id="LetterList">{letters}</ul>;
  }
}

export default LettersList;
