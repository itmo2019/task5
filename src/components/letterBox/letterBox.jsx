import React, { Component } from 'react';
import Toolbar from '../toolbar/toolbar';
import LetterDialog from '../letterDialog/letterDialog';
import SupportLine from '../supportLine/supportLine';
import LetterGenerator from '../../utils/letterGenerator';
import Letter from '../letter/letter';
import './letterBox.css';

function Hr() {
  return <hr className="letter-box__hr" />;
}

export default class LetterBox extends Component {
  static displayName = 'LetterBox';

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
      letters: [],
      isMailVisible: false,
      mailContent: undefined,
      isCheckAll: false
    };
  }

  setCheckAll = value => {
    this.setState({ isCheckAll: value });
  };

  getRandomLetter = () => {
    const authorName = this.letterGenerator.getAuthorName();
    return {
      id: this.letterId++,
      authorName,
      authorLogo: this.letterGenerator.getAuthorLogo(authorName),
      topic: this.letterGenerator.getTopic(),
      body: this.letterGenerator.getLetterBody(),
      date: this.letterGenerator.getDate(),
      isUnread: true,
      isChecked: false
    };
  };

  newMail = () => {
    this.setState(state => {
      const letters = state.letters.slice();
      if (letters.length >= state.curPage * this.MAX_MAIL_LIST_SIZE) {
        letters[state.curPage * this.MAX_MAIL_LIST_SIZE - 1].isChecked = false;
      }
      return {
        letters: [this.getRandomLetter(), ...letters]
      };
    });
    this.setCheckAll(false);
  };

  doActionWithLetters = action => {
    const { curPage, letters } = this.state;
    const first = (curPage - 1) * this.MAX_MAIL_LIST_SIZE;
    for (let i = Math.min(letters.length, curPage * this.MAX_MAIL_LIST_SIZE) - 1; i >= first; i--) {
      if (letters[i].isChecked) {
        action(i);
      }
    }
  };

  removeAnimateLetter = index => {
    setTimeout(() => {
      this.setState(state => {
        const letters = state.letters.slice();
        letters[index].hasRemoveAnimation = true;
        return { letters };
      });
      setTimeout(() => {
        this.setState(state => {
          const letters = state.letters.slice();
          letters.splice(index, 1);
          return { letters };
        });
      }, this.REMOVE_LETTER_TIME);
    }, this.DELTA_TIME);
  };

  handleRemoveButtonClick = () => {
    setTimeout(() => {
      this.setCheckAll(false);
    }, (this.REMOVE_LETTER_TIME * 2) / 3);
    this.doActionWithLetters(this.removeAnimateLetter);
  };

  unmarkLetter = index => {
    this.setState(state => {
      const letters = state.letters.slice();
      letters[index].isUnread = false;
      return { letters };
    });
  };

  handleUnmarkButtonClick = () => {
    this.doActionWithLetters(this.unmarkLetter);
  };

  handleMailCheckClick = index => {
    this.setState(state => {
      const letters = state.letters.slice();
      const checked = letters[index].isChecked;
      const isCheckAllNew = checked ? !checked : state.isCheckAll;
      letters[index].isChecked = !checked;
      return { letters, isCheckAll: isCheckAllNew };
    });
  };

  handleCheckAllClick = () => {
    this.setState(state => {
      const letters = state.letters.slice();
      const size = Math.min(letters.length, state.curPage * this.MAX_MAIL_LIST_SIZE);
      for (let i = (state.curPage - 1) * this.MAX_MAIL_LIST_SIZE; i < size; i++) {
        letters[i].isChecked = !state.isCheckAll;
      }
      return { letters, isCheckAll: !state.isCheckAll };
    });
  };

  handleMailClick = index => {
    this.setState(state => {
      const mailContent = (
        <div>
          <div className="letter__topic_is-open">{state.letters[index].topic}</div>
          {state.letters[index].body}
        </div>
      );
      return { isMailVisible: true, mailContent };
    });
    this.unmarkLetter(index);
  };

  handleMailExitClick = () => {
    this.setState({ isMailVisible: false });
  };

  render() {
    const { curPage, letters, isMailVisible, mailContent, isCheckAll } = this.state;

    const listLetters = letters.map((letter, index) => (
      <Letter
        key={letter.id}
        className="letter-box__letter"
        authorName={letter.authorName}
        authorLogo={letter.authorLogo}
        topic={letter.topic}
        body={letter.body}
        date={letter.date}
        hiddenMail={
          letters.length > curPage * this.MAX_MAIL_LIST_SIZE &&
          index >= curPage * this.MAX_MAIL_LIST_SIZE
        }
        hasRemoveAnimation={letter.hasRemoveAnimation}
        handleMailCheckClick={this.handleMailCheckClick.bind(this, index)}
        handleMailClick={this.handleMailClick.bind(this, index)}
        isUnread={letter.isUnread}
        isChecked={letter.isChecked}
      />
    ));

    return (
      <div className={`letter-box ${this.props.className}`}>
        <Toolbar
          isChecked={isCheckAll}
          handleAddMailButtonClick={this.newMail}
          handleRemoveButtonClick={this.handleRemoveButtonClick}
          handleUnmarkButtonClick={this.handleUnmarkButtonClick}
          handleCheckAllClick={this.handleCheckAllClick}
        />
        <Hr />
        <LetterDialog isMailVisible={isMailVisible} handleMailExitClick={this.handleMailExitClick}>
          {mailContent}
        </LetterDialog>
        <ul className="letter-box__letter-list">{listLetters}</ul>
        <div className="letter-box__support-line">
          <Hr />
          <SupportLine />
        </div>
      </div>
    );
  }
}
