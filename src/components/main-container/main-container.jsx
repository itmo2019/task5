import React, { Component } from 'react';

import './main-container.css';
import ActionsBar from '../actions-bar';
import Mails from '../mails';

import YandexAvatar from '../../resources/img/ya-default.svg';
import Anonymous from '../../resources/img/anonymous.svg';
import Munch from '../../resources/img/munch.png';
import Maggritte from '../../resources/img/magritte.png';

const senders = [
  'Антоша',
  'Брат моего брата',
  'Врач без пациентов',
  'Вспыльчивый человек',
  'Гайка № 6',
  'Гайка №9',
  'Numeric Master'
];
const avatars = [Anonymous, Munch, Maggritte];
const month = ['янв', 'фев', 'март', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

function minutesToMillis(minutes) {
  return 1000 * 60 * minutes;
}

const newMessageTimeoutMax = minutesToMillis(5);
const minNewMessageTimeout = 10;
const maxNewMessageTimeout = minutesToMillis(10);

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

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
          text: "There's a lady who's sure.\n All that glitters is gold",
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
          text: "And she's buying a stairway to heaven",
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
          text: "Oh oh oh oh and she's\n buying a stairway to heaven",
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
    setTimeout(this.removeDeleted, 400);
  };

  removeDeleted = () => {
    this.updateLetter(it => it.filter(x => !x.deleted));
  };

  selectAll = () => {
    const cur = this.isAllSelected(this.state.letters);
    this.updateLetter(letters =>
      letters.map(it => {
        const copy = Object.assign({}, it);
        copy.checked = !cur;
        return copy;
      })
    );
  };

  isAllSelected = letters => letters.reduce((acc, next) => acc && next.checked, true);

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

  newMail = () => {
    const year = randomInteger(100, 2019);
    this.loadFactAboutYear(year);
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

  buildMail = (year, text) => {
    function getDate() {
      const temp = new Date();
      return `${temp.getDate()} ${month[temp.getMonth()]}`;
    }

    function getSender() {
      return senders[randomInteger(0, senders.length - 1)];
    }

    function getAvatar() {
      return avatars[randomInteger(0, avatars.length - 1)];
    }

    function getTitle() {
      switch (randomInteger(0, 2)) {
        case 0:
          return `В ${year} нужно всего лишь...`;
        case 1:
          return `А ты знал что в ${year} году...`;
        default:
          return `Раз в ${year} происходит...`;
      }
    }

    const sender = getSender();
    const avatar = getAvatar();

    const newLetter = {
      id: this.state.letters.length + 1,
      sender,
      avatar,
      receiveTime: getDate(),
      title: getTitle(year),
      text,
      unread: true
    };

    this.updateLetter(old => [newLetter, ...old]);

    setTimeout(() => this.setFirstShow(newLetter.id), 5);
  };

  loadFactAboutYear(year) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `//numbersapi.com/${year}/year`, true);
    const that = this;
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          that.buildMail(year, xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = () => {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }

  render() {
    return (
      <div className="main-container">
        <ActionsBar newMail={this.newMail} />
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
