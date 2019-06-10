import React, { Component } from 'react';
import Mail from "./mail";

import './app.css';

const lenOfAlphabet = 26;
const monthNames = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const usLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "0123456789.,";

const deleteTimeout = 3000;
const minSenderNameSize = 3;
const maxSenderNameSize = 40;
const minContentSize = 2;
const maxContentSize = 100;
const possibleDifferenceOfTimeBetweenNewMessages = 10000;
const minSizeOfTimeBetweenNewMessages = 10000;

let idCounter = 6;

function getHolePositiveNum() {
  let rand = Math.random() * 10000000;
  if (rand < 0) {
    rand *= -1;
  }
  return Math.floor(rand);
}

function randomString(minLen, maxLen) {
  const len = getHolePositiveNum() % (maxLen - minLen) + minLen;
  let resString = letters.charAt(getHolePositiveNum() % lenOfAlphabet);
  for (let i = 1; i < len; i++) {
    let lett = usLetters.charAt(getHolePositiveNum() % lenOfAlphabet);
    if (getHolePositiveNum() % 5 == 0) {
      lett = letters.charAt(getHolePositiveNum() % lenOfAlphabet);
    }
    if (getHolePositiveNum() % 10 == 0) {
      lett = symbols;
    }
    resString += lett;
  }
  return resString;
}

function randomDate() {
  const month = getHolePositiveNum() % 12;
  if ((month < 6 && (month % 2) == 0) || (month >= 6 && (month % 2) == 1)) {
    return (getHolePositiveNum() % 31 + 1) + " " + monthNames[month];
  }
  if (month == 1) {
    return (getHolePositiveNum() % 29 + 1) + " " + monthNames[month];
  }
  return (getHolePositiveNum() % 30 + 1) + " " + monthNames[month];
}

export class Mails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: this.createLetters()
    };
    this.mailsRefs = {};
  }

  componentDidMount() {
    this.props.mailRef(this)
    this.runLetterTimer();
  }

  componentWillUnmount() {
    this.props.mailRef(undefined);
  }

  addRandomLetter = () => {
    let sender = randomString(minSenderNameSize, maxSenderNameSize);
    let content = randomString(minContentSize, maxContentSize);
    let date = randomDate();
    let copyOfLetters = this.state.letters.slice();
    copyOfLetters.unshift({sender:sender, content:content, read: false, chosen: false, date : date, hide: true, uniqId: idCounter});
    idCounter++;
    this.setState({letters : copyOfLetters});
    setTimeout(() => {
      copyOfLetters[0].hide = false;
      this.setState({letters : copyOfLetters});
    }, 600);
    setTimeout(this.runLetterTimer(), deleteTimeout);
  }

  runLetterTimer = () => {
    let letterTimer = getHolePositiveNum();
    letterTimer %= possibleDifferenceOfTimeBetweenNewMessages;
    letterTimer += minSizeOfTimeBetweenNewMessages;
    setTimeout(this.addRandomLetter, letterTimer);
  }

  createLetters() {
    return [
      {
        sender: "Татьяна Ларина",
        content: "Я к вам пишу - чего же боле? Что я могу ещё сказать?",
        read: false,
        date: "8 фев",
        chosen: false,
        hide: false,
        uniqId: 1
      },
      {
        sender: "Яндекс.Паспорт.Длинное название",
        content: "Доступ к аккаунту восстановлен",
        read: false,
        date: "6 авг",
        chosen: false,
        hide: false,
        uniqId: 2
      },
      {
        sender: "Яндекс.Паспорт.Длинное название",
        content: "Как читать почту с мобильного. И допустим дальше очень длинное название которое не должно влезть",
        read: false,
        date: "6 авг",
        chosen: false,
        hide: false,
        uniqId: 3
      },
      {
        sender: "Команда Яндекс.Почты",
        content: "Как читать почту с мобильного",
        read: true,
        date: "6 июл",
        chosen: false,
        hide: false,
        uniqId: 4
      },
      {
        sender: "Яндекс",
        content: "Соберите всю почту в этот ящик",
        read: true,
        date: "6 июл",
        chosen: false,
        hide: false,
        uniqId: 5
      }
    ];
  }

  inProocessOfDelete = false;
  deleteChosenLetters() {
    if (this.inProocessOfDelete) {
      return
    }
    this.inProocessOfDelete = true;
    let copyOfLetters = this.state.letters.slice();
    copyOfLetters.forEach((letter, idx) => {letter.hide = this.mailsRefs[idx].state.chosen})
    this.setState({letters : copyOfLetters});

    setTimeout (() => {
      copyOfLetters = this.state.letters.filter(letter => !letter.hide);
      this.setState({letters : copyOfLetters});
      this.unchoseAllLetters();
      this.inProocessOfDelete = false;
      }, 600
    )
  }

  choseAllLetters() {
    this.state.letters.forEach((letter, idx) => {
      this.mailsRefs[idx].setState({chosen: true});
    });
  }

  unchoseAllLetters() {
    this.state.letters.forEach((letter, idx) => {
      this.mailsRefs[idx].setState({chosen: false});
    });
  }

  mCheckboxClicked(idx) {
    let copyOfLetters = this.state.letters.slice();
    copyOfLetters[idx].chosen = !this.state.letters[idx].chosen;
    this.setState({letters : copyOfLetters});
  }

  render() {
    return (
      <div className={"tab default-tab" + (this.props.hideMails ? " mails__hide": "")} id="mails">
        { this.state.letters.map((letter, idx) =>
          <Mail
            key={letter.uniqId}
            onLetterClick={() => this.props.onLetterOpened(letter.sender, letter.content)}
            onCheckboxClick={() => this.mCheckboxClicked(idx)}
            sender={letter.sender} content={letter.content} read={letter.read} date={letter.date} chosen={letter.chosen} hide={letter.hide}
            ref={mailRef => {this.mailsRefs[idx] = mailRef}}
          />
        )}
      </div>
    );
  }
}

export default Mails;
