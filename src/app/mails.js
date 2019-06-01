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
    this.runLetterTimer();
  }

  addRandomLetter = () => {
    let sender = randomString(minSenderNameSize, maxSenderNameSize);
    let content = randomString(minContentSize, maxContentSize);
    let date = randomDate();
    let copyOfLetters = this.state.letters.slice();
    copyOfLetters.unshift({sender:sender, content:content, read: false, chosen: false, date : date, hide: true});
    copyOfLetters[0].hide = false;
    this.setState({letters : copyOfLetters});
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
        hide: false
      },
      {
        sender: "Яндекс.Паспорт.Длинное название",
        content: "Доступ к аккаунту восстановлен",
        read: false,
        date: "6 авг",
        hide: false
      },
      {
        sender: "Яндекс.Паспорт.Длинное название",
        content: "Как читать почту с мобильного. И допустим дальше очень длинное название которое не должно влезть",
        read: false,
        date: "6 авг",
        hide: false
      },
      {
        sender: "Команда Яндекс.Почты",
        content: "Как читать почту с мобильного",
        read: true,
        date: "6 июл",
        hide: false
      },
      {
        sender: "Яндекс",
        content: "Соберите всю почту в этот ящик",
        read: true,
        date: "6 июл",
        hide: false
      }
    ];
  }

  deleteChosenLetters() {
    let copyOfLetters = this.state.letters.slice();
    copyOfLetters = copyOfLetters.filter((letter, idx) => !this.mailsRefs[idx].state.chosen);
    this.setState({letters : copyOfLetters});
    this.unchoseAllLetters();
  }

  choseAllLetters() {
    this.state.letters.forEach((letter, idx) => {
      this.mailsRefs[idx].setState({chosen: true});
    });
    // let copyOfLetters = this.state.letters.slice();
    // copyOfLetters.forEach(letter => {letter.chosen = true});
    // this.setState({letters : copyOfLetters});
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
      <div className="tab mails default-tab" id="mails">
        { this.state.letters.map((letter, idx) =>
          <Mail
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
