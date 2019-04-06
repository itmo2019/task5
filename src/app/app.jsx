import React, { Component } from 'react';
import { SearchBar } from './search-bar';
import { Sidebar } from './sidebar';
import { Letters } from './letters';
import '../common.blocks/mail__layout-letters.css';
import '../common.blocks/mail__layout-search.css';
import '../common.blocks/mail__layout-sidebar.css';

const senders = ['Полиция мемов', 'Яндекс.Такси', 'ГоСуслуги'];
const themes = ['Запощен недопустимый мем', 'До Краснодара за 55000P', 'Ваша справка готова'];
const dates = ['31 тра', '29 сич', '15 лис'];

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: [
        {
          id: 0,
          data: {
            checked: false,
            sender: 'Яндекс.Паспорт',
            letter: 'Я',
            date: '6 авг',
            preview: 'Доступ к аккаунту восстановлен'
          },
          special: true,
          unread: true
        },
        {
          id: 1,
          data: {
            checked: false,
            letter: 'Я',
            sender: 'Команда Яндекс.Почты',
            date: '6 июл',
            preview: 'Как читать почту с мобильного'
          },
          unread: true
        },
        {
          id: 2,
          data: {
            checked: false,
            letter: 'Я',
            sender: 'Яндекс',
            date: '5 июл',
            preview: 'Соберите всю почту в этот ящик'
          },
          unread: false
        }
      ],
      maxId: 20
    };

    function debounce(func, wait, immediate) {
      let timeout;
      return function() {
        const context = this;

        const args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const addNewLetterDebounced = debounce(this.addLetter, 5 * 60 * 1000);

    function addNewLetterRepeated() {
      addNewLetterDebounced();
      setTimeout(addNewLetterRepeated, new Date().getMilliseconds() % (60 * 1000));
    }

    addNewLetterRepeated();
  }

  updateLetter = f => {
    this.setState((prevState, prevProps) => {
      return {
        letters: f(prevState.letters)
      };
    });
  };

  addLetter = () => {
    const senderx = senders[Math.floor(Math.random() * senders.length)];
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const datex = dates[Math.floor(Math.random() * dates.length)];
    const newLetter = {
      id: this.state.maxId + 1,
      data: {
        checked: false,
        letter: senderx[0],
        sender: senderx,
        date: datex,
        preview: theme
      },
      unread: Math.random() < 0.5,
      added: true
    };
    this.setState((prevState, x) => {
      return {
        maxId: prevState.maxId + 1
      };
    });
    this.updateLetter(old => [newLetter, ...old]);
  };

  render() {
    return (
      <div>
        <div className="mail__layout-sidebar">
          <Sidebar addLetter={this.addLetter} />
        </div>
        <div className="mail__layout-search">
          <SearchBar />
        </div>
        <div className="mail__layout-letters">
          <Letters letters={this.state.letters} updateLetter={this.updateLetter} />
        </div>
      </div>
    );
  }
}
