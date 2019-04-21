import React from 'react';

import MessagesOptions from '../messagesOptions/messagesOptions';
import {
  getSender,
  getLogo,
  generateLetter,
  getRandomFromRange
} from '../../generators/letterGenerator';
import Letter from '../letter/letter';
import NavigationBar from '../navigationBar/navigationBar';
import ivanovLogo from '../../resources/images/senders_pics/georgiy-ivanov.png';

import './lettersWindow.css';

function minutesToMillis(minutes) {
  return 1000 * 60 * minutes;
}

const MIN_NEW_LETTER_TIMING = 10;
const MAX_NEW_LETTER_TIMING = minutesToMillis(10);
const TIME_WINDOW_SIZE = minutesToMillis(5);
const MAX_MAIL_LIST_SIZE = 30;
const REMOVE_LETTER_TIME = 500;
const DELAY_TIME = 20;
const ivanovText =
  'Хорошо, что нет Царя. Хорошо, что нет России. Хорошо, что Бога нет.' +
  ' Только желтая заря, Только звезды ледяные, Только миллионы лет. ' +
  ' Хорошо -- что никого, Хорошо -- что ничего, Так черно и так мертво, ' +
  ' Что мертвее быть не может И чернее не бывать, Что никто нам не поможет' +
  ' И не надо помогать.';

class LettersWindow extends React.Component {
  lastTimingWasLessThanWindowSize = false;

  lamportClock = 0;

  constructor(props) {
    super(props);
    this.state = {
      letters: [this.generateFirstLetter()],
      isMailVisible: false,
      mailContent: '',
      isCheckAll: false
    };
  }

  componentDidMount() {
    const self = this;
    this.mainTimerId = setTimeout(
      self.run,
      getRandomFromRange(MIN_NEW_LETTER_TIMING, MAX_NEW_LETTER_TIMING)
    );
  }

  componentWillUnmount() {
    clearTimeout(this.mainTimerId);
    clearTimeout(this.repeatedTimerId);
  }

  setCheckAll = value => {
    this.setState({ isCheckAll: value });
  };

  run = () => {
    this.newMail();
    let randomTiming = getRandomFromRange(MIN_NEW_LETTER_TIMING, MAX_NEW_LETTER_TIMING);
    if (randomTiming < TIME_WINDOW_SIZE) {
      if (this.lastTimingWasLessThanWindowSize) {
        this.lastTimingWasLessThanWindowSize = false;
        randomTiming = getRandomFromRange(TIME_WINDOW_SIZE, MAX_NEW_LETTER_TIMING);
      } else {
        this.lastTimingWasLessThanWindowSize = true;
      }
    } else {
      this.lastTimingWasLessThanWindowSize = false;
    }
    this.repeatedTimerId = setTimeout(this.run, randomTiming);
  };

  generateFirstLetter = () => {
    const authorName = 'Георгий Иванов';
    const letterLogo = (
      <img className="letter__author-logo-pic" src={ivanovLogo} alt={authorName} />
    );
    const curId = this.lamportClock;
    this.lamportClock++;
    return {
      id: curId,
      authorName,
      authorLogo: letterLogo,
      topic: ivanovText,
      date: '22 фев.',
      isChecked: false
    };
  };

  generateNewLetter = () => {
    const authorName = getSender();
    const letterLogo = <img className="letter__author-logo-pic" src={getLogo()} alt={authorName} />;
    const letterText = generateLetter();
    const curId = this.lamportClock;
    this.lamportClock++;
    return {
      id: curId,
      authorName,
      authorLogo: letterLogo,
      topic: letterText,
      date: '14 апр.',
      isChecked: false
    };
  };

  newMail = () => {
    const self = this;
    function newMailImpl(state) {
      const letters = state.letters.slice();
      if (letters.length >= MAX_MAIL_LIST_SIZE) {
        letters[MAX_MAIL_LIST_SIZE - 1].isChecked = false;
      }
      const newLetter = self.generateNewLetter();
      const newLetters = [newLetter];
      for (let i = 0; i < letters.length; i++) {
        newLetters.push(letters[i]);
      }
      return {
        letters: newLetters
      };
    }
    this.setState(newMailImpl);
    this.setCheckAll(false);
  };

  removeLetterWithAnimation = index => {
    const self = this;
    function animateLetterImpl() {
      function stateChange(state) {
        const letters = state.letters.slice();
        letters[index].hasRemoveAnimation = true;
        return { letters };
      }

      self.setState(stateChange);

      function innerAnimation() {
        function innerStateChange(state) {
          const letters = state.letters.slice();
          letters.splice(index, 1);
          self.setCheckAll(false);
          return { letters };
        }

        self.setState(innerStateChange);
      }

      setTimeout(innerAnimation, REMOVE_LETTER_TIME);
    }

    setTimeout(animateLetterImpl, DELAY_TIME);
  };

  removeLetters = () => {
    const { letters } = this.state;
    for (let i = Math.min(letters.length, MAX_MAIL_LIST_SIZE) - 1; i >= 0; i--) {
      if (letters[i].isChecked) {
        this.removeLetterWithAnimation(i);
      }
    }
  };

  processCheckboxChange = index => {
    function stateChange(state) {
      const letters = state.letters.slice();
      const checked = letters[index].isChecked;
      if (checked) {
        letters[index].isChecked = false;
        return { letters, isCheckAll: false };
      } else {
        letters[index].isChecked = true;
        return { letters, isCheckAll: state.isCheckAll };
      }
    }

    this.setState(stateChange);
  };

  mainCheckboxClicked = () => {
    function stateChange(state) {
      const letters = state.letters.slice();
      const newCheckedAll = !state.isCheckAll;
      for (let i = 0; i < Math.min(letters.length, MAX_MAIL_LIST_SIZE); i++) {
        letters[i].isChecked = newCheckedAll;
      }
      return { letters, isCheckAll: newCheckedAll };
    }

    this.setState(stateChange);
  };

  openMessage = index => {
    function stateChange(state) {
      const letterText = state.letters[index].topic;
      let mailContent = '';
      if (letterText === ivanovText) {
        mailContent = (
          <div>
            Хорошо, что нет Царя.
            <br />
            Хорошо, что нет России.
            <br />
            Хорошо, что Бога нет.
            <br />
            <br />
            Только желтая заря,
            <br />
            Только звезды ледяные,
            <br />
            Только миллионы лет.
            <br />
            <br />
            Хорошо -- что никого,
            <br />
            Хорошо -- что ничего,
            <br />
            Так черно и так мертво,
            <br />
            <br />
            Что мертвее быть не может
            <br />
            И чернее не бывать,
            <br />
            Что никто нам не поможет
            <br />И не надо помогать.
          </div>
        );
      } else {
        mailContent = <div>{letterText}</div>;
      }
      return { isMailVisible: true, mailContent };
    }
    this.setState(stateChange);
  };

  letterClosed = () => {
    this.setState({ isMailVisible: false });
  };

  makeLetters = (currentMessage, index) => {
    const { letters } = this.state;
    const bindedHandleMailCheckClick = this.processCheckboxChange.bind(this, index);
    const bindedOpenMail = this.openMessage.bind(this, index);
    const isHidden = letters.length > MAX_MAIL_LIST_SIZE && index >= MAX_MAIL_LIST_SIZE;
    return (
      <Letter
        key={currentMessage.id}
        senderName={currentMessage.authorName}
        senderPic={currentMessage.authorLogo}
        hasRemoveAnimation={currentMessage.hasRemoveAnimation}
        processCheckboxChange={bindedHandleMailCheckClick}
        openMessage={bindedOpenMail}
        isChecked={currentMessage.isChecked}
        messageText={currentMessage.topic}
        date={currentMessage.date}
        isLetterHidden={isHidden}
      />
    );
  };

  render() {
    const { letters, isMailVisible, mailContent, isCheckAll } = this.state;
    let openedLetterClass = '';
    if (isMailVisible) {
      openedLetterClass = 'opened-letter_visible';
    } else {
      openedLetterClass = 'opened-letter';
    }
    return (
      <main className="letters-window">
        <NavigationBar addNewMail={this.newMail} />
        <div className="letter-box">
          <MessagesOptions
            isChecked={isCheckAll}
            removeMessages={this.removeLetters}
            handleCheckAllClick={this.mainCheckboxClicked}
          />
          <hr className="letter-box__hr" />
          <section className={openedLetterClass}>
            <div className="opened-letter__cross" onClick={this.letterClosed}>
              x
            </div>
            <div className="opened-letter__content">{mailContent}</div>
          </section>
          <ul className="letter-box__letter-list">{letters.map(this.makeLetters)}</ul>
          <div className="letter-box__contacts-holder">
            <hr className="letter-box__hr" />
            <div className="contacts">
              <div className="contacts__item">Помощь и обратная связь</div>
              <div className="contacts__item">Реклама</div>
              <div className="contacts__item">© 2001—2019, Яндекс</div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default LettersWindow;
