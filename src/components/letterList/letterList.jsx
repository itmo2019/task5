import React, { Component } from 'react';
import Letter from '../letter/letter';
import LetterGenerator from '../../utils/letterGenerator';
import { getInt } from '../../utils/randomFunctions';
import './letterList.css';
import '../letter/letter.css';

export default class LetterList extends Component {
  static displayName = 'LetterList';

  MIN_TIMER_ADD_MAIL = 300000;

  MAX_TIMER_ADD_MAIL = 600001;

  MAX_MAIL_LIST_SIZE = 10;

  REMOVE_LETTER_TIME = 500;

  DELTA_TIME = 20;

  letterId = 0;

  letterGenerator = new LetterGenerator();

  constructor(props) {
    super(props);
    this.state = {
      curPage: 1,
      letters: []
    };

    props.updateHandleAddMailButtonClick(this.newMail);
    props.updateHandleRemoveButtonClick(this.handleRemoveButtonClick);
    props.updateHandleUnmarkButtonClick(this.handleUnmarkButtonClick);
    props.updateHandleCheckAllClick(this.handleCheckAllClick);
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

  getRandomLetter = () => {
    const authorName = this.letterGenerator.getAuthorName();
    return {
      id: this.letterId++,
      authorName,
      authorLogo: this.letterGenerator.getAuthorLogo(authorName),
      topic: this.letterGenerator.getTopic(),
      body: this.letterGenerator.getLetterBody(),
      date: this.letterGenerator.getDate(),
      isUnread: true
    };
  };

  newMail = () => {
    this.setState(state => {
      return {
        letters: [this.getRandomLetter(), ...state.letters]
      };
    });
    this.props.setCheckAll(false);
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
        const lettersCopy = state.letters.slice();
        lettersCopy[index].hasRemoveAnimation = true;
        return { letters: lettersCopy };
      });
      setTimeout(() => {
        this.setState(state => {
          const lettersCopy = state.letters.slice();
          lettersCopy.splice(index, 1);
          return { letters: lettersCopy };
        });
      }, this.REMOVE_LETTER_TIME);
    }, this.DELTA_TIME);
  };

  handleRemoveButtonClick = () => {
    setTimeout(() => {
      this.props.setCheckAll(false);
    }, (this.REMOVE_LETTER_TIME * 2) / 3);
    this.doActionWithLetters(this.removeAnimateLetter);
  };

  unmarkLetter = index => {
    this.setState(state => {
      const lettersCopy = state.letters.slice();
      lettersCopy[index].isUnread = false;
      return { letters: lettersCopy };
    });
  };

  handleUnmarkButtonClick = () => {
    this.doActionWithLetters(this.unmarkLetter);
  };

  handleMailCheckClick = (index, checked) => {
    this.setState(state => {
      const lettersCopy = state.letters.slice();
      lettersCopy[index].isChecked = checked;
      return { letters: lettersCopy };
    });
  };

  handleCheckAllClick = checked => {
    this.setState(state => {
      const lettersCopy = state.letters.slice();
      const size = Math.min(lettersCopy.length, state.curPage * this.MAX_MAIL_LIST_SIZE);
      for (let i = (state.curPage - 1) * this.MAX_MAIL_LIST_SIZE; i < size; i++) {
        lettersCopy[i].isChecked = checked;
      }
      return { letters: lettersCopy };
    });
  };

  handleMailClick = index => {
    const letterContent = (
      <div>
        <div className="letter__topic_is-open">{this.state.letters[index].topic}</div>
        {this.state.letters[index].body}
      </div>
    );
    this.props.handleLetterDialog(letterContent);
    this.unmarkLetter(index);
  };

  render() {
    const { letters, curPage } = this.state;
    const listLetters = letters.map((letter, index) => (
      <Letter
        {...this.props}
        key={letter.id}
        className="letter-list__letter"
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
        isMailChecked={letter.isChecked}
      />
    ));

    return <ul className="letter-list">{listLetters}</ul>;
  }
}
