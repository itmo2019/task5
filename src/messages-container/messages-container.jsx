import React, { Component } from 'react';
import Message from '../message/message';
import MessageControls from '../message-controls/message-controls';
import Footer from '../footer/footer';
import './messages-container.css';

const MAX_MSGS = 30;

const MIN_SENTENCES = 2;
const MAX_SENTENCES = 10;

export class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.newMail = this.newMail.bind(this);
    props.setNewMail(this.newMail);
    this.onCheckedChanged = this.onCheckedChanged.bind(this);
    this.onSelectAllChanged = this.onSelectAllChanged.bind(this);
    this.onMarkAsRead = this.onMarkAsRead.bind(this);
    this.onMarkAsReadSelected = this.onMarkAsReadSelected.bind(this);
    this.onDeleteSelected = this.onDeleteSelected.bind(this);
    this.showMessageContent = this.showMessageContent.bind(this);

    this.state = {
      letters: [],
      lastId: -1,
      selectAll: false,
      showMessageContent: false,
      curLetter: undefined
    };
  }

  onCheckedChanged(id, newChecked) {
    this.setState(prevState => ({
      letters: prevState.letters.map(letter => {
        if (letter.id === id) {
          return this.toggleCheckedFlag(letter);
        }
        return letter;
      })
    }));
    if (newChecked === false) {
      this.setState({ selectAll: false });
    }
  }

  onMarkAsRead(id) {
    this.setState(prevState => ({
      letters: prevState.letters.map(letter => {
        if (letter.id === id) {
          return this.markAsRead(letter);
        }
        return letter;
      })
    }));
  }

  onSelectAllChanged() {
    this.setState(prevState => ({
      letters: prevState.letters.map(letter => {
        if (letter.checked === prevState.selectAll) {
          return this.toggleCheckedFlag(letter);
        }
        return letter;
      }),
      selectAll: !prevState.selectAll
    }));
  }

  onMarkAsReadSelected() {
    this.setState(prevState => ({
      letters: prevState.letters.map(letter => {
        if (letter.checked) {
          return this.toggleCheckedFlag(this.markAsRead(letter));
        }
        return letter;
      }),
      selectAll: false
    }));
  }

  onDeleteSelected() {
    this.setState(prevState => ({
      letters: prevState.letters.map(letter => {
        if (letter.checked) {
          const newLetter = { ...letter };
          newLetter.isDeleting = true;
          newLetter.checked = false;
          return newLetter;
        }
        return letter;
      }),
      selectAll: false
    }));
    setTimeout(() => {
      this.setState(prevState => ({
        letters: prevState.letters.filter(letter => !letter.isDeleting)
      }));
    }, 500);
  }

  getRandomLetter() {
    const authorTable = [
      ['Иван', 'Пётр', 'Александр', 'Кирилл', 'Алексей'],
      ['Иванов', 'Петров', 'Сидоров', 'Козлов']
    ];
    const contentTable = [
      [
        'Товарищи,',
        'С другой стороны',
        'Равным образом',
        'Не следует, однако, забывать, что',
        'Таким образом',
        'Повседневная практика показывает, что'
      ],

      [
        'реализация намеценных плановых заданий',
        'рамки и место обучения кадров',
        'постоянный количественный рост и сфера нашей активности',
        'сложившаяся структура организации',
        'новая модель организационной деятельности',
        'дальнейшее развитие различных форм деятельности'
      ],

      [
        'играет важную роль в формировании',
        'требуют от нас анализа',
        'требуют определения и уточнения',
        'способствует поднготовке и реализации',
        'обеспецивает широкому кругу специалистов участие в формировании',
        'позволяет выполнить важные задания по разработке'
      ],

      [
        'существенных финансовых и административных условий.',
        'дальнейших направлений развития.',
        'системы массового участия.',
        'позиций, занимаемых участниками в отношении поставленных задач.',
        'новых предложений.',
        'направлений прогрессивного развития.'
      ]
    ];

    const letter = {};
    letter.author = `${this.randArrayElem(authorTable[0])} ${this.randArrayElem(authorTable[1])}`;

    const sentCnt = this.randIntFromRange(MIN_SENTENCES, MAX_SENTENCES);
    letter.content = '';
    for (let i = 0; i < sentCnt; i++) {
      let curSentence = '';
      for (let j = 0; j < contentTable.length; j++) {
        curSentence += `${this.randArrayElem(contentTable[j])} `;
      }
      letter.content += curSentence;
      if (i === 0) {
        letter.topic = curSentence;
      }
    }

    letter.date = new Date();
    letter.id = this.state.lastId + 1;
    this.setState({ lastId: letter.id });
    letter.read = false;
    letter.checked = this.state.selectAll;
    return letter;
  }

  randInt = to => {
    return Math.floor(Math.random() * to);
  };

  markAsRead = letter => {
    const newLetter = { ...letter };
    newLetter.read = true;
    return newLetter;
  };

  toggleCheckedFlag = letter => {
    const newLetter = { ...letter };
    newLetter.checked = !letter.checked;
    return newLetter;
  };

  newMail() {
    const newLetter = this.getRandomLetter();
    this.setState(prevState => {
      return { letters: [newLetter, ...prevState.letters] };
    });
  }

  randIntFromRange(from, to) {
    return this.randInt(to - from + 1) + from;
  }

  randArrayElem(arr) {
    return arr[this.randInt(arr.length)];
  }

  showMessageContent(letter) {
    return id =>
      this.setState(prevState => ({
        showMessageContent: true,
        curLetter: letter,
        letters: prevState.letters.map(msg => {
          if (msg.id === id) {
            return this.markAsRead(msg);
          }
          return msg;
        })
      }));
  }

  cntOfCheckedMessages() {
    let res = 0;
    this.state.letters.forEach(letter => {
      if (letter.checked) {
        res++;
      }
    });
    return res;
  }

  render() {
    return (
      <div className="messages-container">
        <MessageControls
          onSelectAllChanged={this.onSelectAllChanged}
          selectAllChecked={this.state.selectAll}
          isActive={this.cntOfCheckedMessages() > 0}
          onMarkAsReadSelected={this.onMarkAsReadSelected}
          onDeleteSelected={this.onDeleteSelected}
        />

        <div className="message-content" hidden={this.state.showMessageContent ? '' : 'hidden'}>
          <button
            className="message-content__close-icon"
            type="button"
            onClick={() => {
              this.setState({ showMessageContent: false });
            }}
          >
            &times;
          </button>
          <div className="message__content">
            {this.state.curLetter ? this.state.curLetter.content : ''}
          </div>
        </div>

        <div className="messages" hidden={this.state.showMessageContent ? 'hidden' : ''}>
          {this.state.letters.slice(0, MAX_MSGS).map(msg => (
            <Message
              letter={msg}
              onCheckedChanged={this.onCheckedChanged}
              key={msg.id}
              onMarkAsRead={this.onMarkAsRead}
              onClick={this.showMessageContent(msg)}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
