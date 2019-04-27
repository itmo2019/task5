import React, { Component } from 'react';

import buildMail from '../mail-builder';
import randomInteger from  '../random-integer'
import loadInfo from '../info-loader';

import './main-container.css';
import ActionsBar from '../actions-bar';
import Mails from '../mails';

import YandexAvatar from '../../resources/img/ya-default.svg';

function minutesToMillis(minutes) {
  return 1000 * 60 * minutes;
}

const newMessageTimeoutMax = minutesToMillis(5);
const minNewMessageTimeout = 10;
const maxNewMessageTimeout = minutesToMillis(10);

export class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: [
        {
          id: 0,
          sender: 'Яндекс.Паспорт',
          avatar: YandexAvatar,
          receiveTime: '6 авг',
          title: 'Доступ к аккаунту восстановлен',
          text: 'There\'s a lady who\'s sure.\n All that glitters is gold',
          unread: true,
          checked: false,
          firstShow: true
        },
        {
          id: 1,
          sender: 'Команда Яндекс.Почты',
          avatar: YandexAvatar,
          receiveTime: '6 июл',
          title: 'Как читать почту с мобильного',
          text: 'And she\'s buying a stairway to heaven',
          unread: true,
          checked: false,
          firstShow: true
        },
        {
          id: 2,
          sender: 'Команда Яндекс.Почты',
          avatar: YandexAvatar,
          receiveTime: '6 июл',
          title: 'Как читать почту с мобильного',
          text: 'When she gets there she knows.If the stores are all closed',
          unread: false,
          checked: false,
          firstShow: true
        },
        {
          id: 3,
          sender: 'Яндекс',
          avatar: YandexAvatar,
          receiveTime: '26 мар',
          title: 'Соберите всю почту в этот ящик',
          text: 'With a word she can get what she came for.',
          unread: false,
          checked: false,
          firstShow: true
        },
        {
          id: 4,
          sender: 'Длиннной динович длинновинский',
          avatar: YandexAvatar,
          receiveTime: '26 мар',
          title: 'Съешь ещё этих мягких французскихбулок, да выпей чаю',
          text: 'Oh oh oh oh and she\'s\n buying a stairway to heaven',
          unread: false,
          checked: false,
          firstShow: true
        }
      ],
      lastTimeout: randomInteger(minNewMessageTimeout, maxNewMessageTimeout)
    };

    setTimeout(this.newMessagePerRandomTime, this.state.lastTimeout);
  }

  removeLetters = () => {
    this.updateLetter(old =>
      old.map(x => {
        if (x.checked) {
          const copy = Object.assign({}, x);
          copy.deleted = true;
          return copy;
        }
        return x;
      })
    );
    document.addEventListener("transitionend", this.removeDeleted);
  };

  removeDeleted = () => {
    this.updateLetter(it => it.filter(x => !x.deleted));
  };

  selectAll = (checked) => {
    this.updateLetter(letters =>
      letters.map(it => {
        const copy = Object.assign({}, it);
        copy.checked = checked;
        return copy;
      })
    );
  };

  updateLetter = f => {
    this.setState(prevState => {
      return {
        letters: f(prevState.letters)
      };
    });
  };

  selectLetter = id => {
    this.updateLetter(it =>
      it.map(x => {
        if (x.id === id) {
          const copy = Object.assign({}, x);
          copy.checked = !copy.checked;
          return copy;
        }
        return x;
      })
    );
  };

  setLetterText = (id, letterText) => {
    this.updateLetter(it =>
      it.map(x => {
        if (x.id === id) {
          const copy = Object.assign({}, x);
          copy.text = letterText;
          return copy;
        }
        return x;
      })
    );
  };

  newMail = () => {
    if (this.state.letters.length < 30) {
      const letterId = this.state.letters.length + 1;
      const newLetter = buildMail(letterId);

      this.updateLetter(old => [newLetter, ...old]);

      loadInfo(text => this.setLetterText(letterId, text));

      setTimeout(() => this.setFirstShow(letterId), 5);
    }
  };

  setFirstShow = id => {
    this.updateLetter(it =>
      it.map(x => {
        if (x.id === id) {
          const copy = Object.assign({}, x);
          copy.firstShow = true;
          return copy;
        }
        return x;
      })
    );
  };

  newMessagePerRandomTime = () => {
    this.newMail();
    const randomTimeout = randomInteger(minNewMessageTimeout, maxNewMessageTimeout);
    const timeout = Math.max(randomTimeout, newMessageTimeoutMax);
    setTimeout(
      this.newMessagePerRandomTime,
      newMessageTimeoutMax - this.state.lastTimeout + timeout
    );
    this.state.lastTimeout = timeout;
  };

  render() {
    return (
      <div className="main-container">
        <ActionsBar onClick={this.newMail}/>
        <Mails
          letters={this.state.letters}
          selectAll={this.selectAll}
          removeLetters={this.removeLetters}
          selectLetter={this.selectLetter}
        />
      </div>
    );
  }
}

export default MainContainer;
