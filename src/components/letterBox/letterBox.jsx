import React, { Component } from 'react';
import Toolbar from '../toolbar/toolbar';
import LetterDialog from '../letterDialog/letterDialog';
import SupportLine from '../supportLine/supportLine';
import LetterGenerator from '../../utils/letterGenerator';
import Letter from '../letter/letter';
import { getInt } from '../../utils/randomFunctions';
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
      isCheckAll: false,
      selectLetterCount: 0
    };
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
      let { selectLetterCount } = state;
      if (letters.length >= state.curPage * this.MAX_MAIL_LIST_SIZE) {
        if (letters[state.curPage * this.MAX_MAIL_LIST_SIZE - 1].isChecked) {
          selectLetterCount--;
        }
        letters[state.curPage * this.MAX_MAIL_LIST_SIZE - 1].isChecked = false;
      }
      return {
        letters: [this.getRandomLetter(), ...letters],
        selectLetterCount
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
          return { letters, selectLetterCount: state.selectLetterCount - 1 };
        });
      }, this.REMOVE_LETTER_TIME);
    }, this.DELTA_TIME);
  };

  handleRemoveButtonClick = () => {
    setTimeout(() => {
      this.setCheckAll(false);
    }, this.REMOVE_LETTER_TIME);
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
      const isCheckAll = checked ? !checked : state.isCheckAll;
      const selectLetterCount = state.selectLetterCount + (checked ? -1 : 1);
      letters[index].isChecked = !checked;
      return { letters, isCheckAll, selectLetterCount };
    });
  };

  handleCheckAllClick = () => {
    this.setState(state => {
      const letters = state.letters.slice();
      const size = Math.min(letters.length, state.curPage * this.MAX_MAIL_LIST_SIZE);
      for (let i = (state.curPage - 1) * this.MAX_MAIL_LIST_SIZE; i < size; i++) {
        letters[i].isChecked = !state.isCheckAll;
      }
      const selectLetterCount = state.isCheckAll ? 0 : size;
      return { letters, isCheckAll: !state.isCheckAll, selectLetterCount };
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
    const {
      curPage,
      letters,
      isMailVisible,
      mailContent,
      selectLetterCount,
      isCheckAll
    } = this.state;

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
        handleMailCheckClick={() => this.handleMailCheckClick(index)}
        handleMailClick={() => this.handleMailClick(index)}
        isUnread={letter.isUnread}
        isChecked={letter.isChecked}
      />
    ));

    const toolbarItems = [
      { type: 'checkbox', value: isCheckAll, onClick: this.handleCheckAllClick },
      { type: 'button', value: 'Получить сообщение', onClick: this.newMail, isActive: true },
      { type: 'button', value: 'Переслать', isActive: selectLetterCount },
      {
        type: 'button',
        value: 'Удалить',
        onClick: this.handleRemoveButtonClick,
        isActive: selectLetterCount
      },
      { type: 'button', value: 'Это спам!', isActive: selectLetterCount },
      {
        type: 'button',
        value: 'Прочитано',
        onClick: this.handleUnmarkButtonClick,
        isActive: selectLetterCount
      }
    ];

    return (
      <div className={`letter-box ${this.props.className}`}>
        <Toolbar isChecked={isCheckAll}>{toolbarItems}</Toolbar>
        <Hr />
        <LetterDialog isVisible={isMailVisible} onExitClick={this.handleMailExitClick}>
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
