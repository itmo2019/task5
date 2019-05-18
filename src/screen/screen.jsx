import React, { Component } from 'react';

import './screen.css';
import { Header } from '../header/header';
import { LeftButtons } from '../leftButtons/leftButtons';
import { MailBox } from '../mailBox/mailBox';
import { generateLetter } from './screenScript';

const maxLetterCount = 10;

export class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      ifCheck: false,
      hidden: false,
      shownText: ''
    };
    this.newLetter = this.newLetter.bind(this);
    this.deleteLetters = this.deleteLetters.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.changeCheckedAll = this.changeCheckedAll.bind(this);
    this.openLetter = this.openLetter.bind(this);
    this.deleteAddAnimation = this.deleteAddAnimation.bind(this);
  }

  changeCheckedId = (letterId, letters) => {
    const curLetters = letters;
    for (let i = 0; i < curLetters.length; i++) {
      if (curLetters[i].id === letterId) {
        curLetters[i].checked = !curLetters[i].checked;
        break;
      }
    }
    return curLetters;
  };

  changeChecked = letterId => {
    this.setState(state => {
      return {
        letters: this.changeCheckedId(letterId, state.letters)
      };
    });
  };

  deleteAddAnimationId = (letterId, letters) => {
    const curLetters = letters;
    for (let i = 0; i < curLetters.length; i++) {
      if (curLetters[i].id === letterId) {
        curLetters[i].addAnimated = false;
        break;
      }
    }
    return curLetters;
  };

  deleteAddAnimation = letterId => {
    this.setState(state => {
      return {
        letter: this.deleteAddAnimationId(letterId, state.letters)
      };
    });
  };

  checkAll = (curCheckSt, letters) => {
    return letters.map(letter => {
      const curLetter = letter;
      if (!curLetter.hiddenLetter) {
        curLetter.checked = curCheckSt;
      }
      return curLetter;
    });
  };

  changeCheckedAll = () => {
    this.setState(state => {
      return {
        ifCheck: !state.ifCheck,
        letters: this.checkAll(!state.ifCheck, state.letters)
      };
    });
  };

  newLetter = () => {
    const newL = generateLetter();
    newL.checked = false;
    newL.hiddenLetter = false;
    newL.addAnimated = true;
    newL.deleteAnimated = false;
    newL.isReaded = false;
    this.setState(state => {
      const curLetters = state.letters;
      if (curLetters.length > maxLetterCount - 1) {
        curLetters[maxLetterCount - 1].hiddenLetter = true;
      }
      return {
        letters: [newL].concat(curLetters)
      };
    });
  };

  unhiddenLetters = letters => {
    const curLetters = letters;
    const size = Math.min(maxLetterCount, curLetters.length);
    for (let i = 0; i < size; i++) {
      if (curLetters[i].hiddenLetter) {
        curLetters[i].hiddenLetter = false;
      }
    }
    return curLetters;
  };

  actualDelete = letters => {
    return letters.filter(letter => !letter.deleteAnimated);
  };

  deleteChecked = letters => {
    const curLetters = letters;
    for (let i = 0; i < curLetters.length; i++) {
      if (curLetters[i].checked) {
        curLetters[i].checked = false;
        curLetters[i].deleteAnimated = true;
      }
    }
    return curLetters;
  };

  setDeleteAnimation = () => {
    this.setState(state => {
      return {
        letters: this.deleteChecked(state.letters),
        ifCheck: false
      };
    });
  };

  deleteLetters = () => {
    this.setState(state => {
      return {
        letters: this.unhiddenLetters(this.actualDelete(state.letters))
      };
    });
  };

  openLetter = (letterId, text) => {
    this.setState(state => {
      const curLetters = state.letters;
      for (let i = 0; i < curLetters.length; i++) {
        if (curLetters[i].id === letterId) {
          curLetters[i].isReaded = true;
          break;
        }
      }
      return {
        letters: curLetters,
        hidden: true,
        shownText: text
      };
    });
  };

  closeLetter = () => {
    this.setState(() => {
      return {
        hidden: false
      };
    });
  };

  render() {
    return (
      <section className="main">
        <Header />
        <LeftButtons newLetter={this.newLetter} />
        <MailBox
          deleteLetters={this.deleteLetters}
          setDeleteAnimation={this.setDeleteAnimation}
          letters={this.state.letters}
          ifCheck={this.state.ifCheck}
          hidden={this.state.hidden}
          shownText={this.state.shownText}
          changeChecked={this.changeChecked}
          changeCheckedAll={this.changeCheckedAll}
          openLetter={this.openLetter}
          closeLetter={this.closeLetter}
          deleteAddAnimation={this.deleteAddAnimation}
        />
      </section>
    );
  }
}
