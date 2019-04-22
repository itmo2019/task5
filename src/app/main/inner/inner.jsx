import React from 'react';

import './inner.css';

import Toolbar from './toolbar';
import MessageList from './message-list';
import Footer from './footer';
import {
  randomizeAuthor,
  randomizeText,
  randomizeDate,
  randomizeImage
} from './message-list/message/message__composer';

let count = 1;

export default class Inner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          id: 0,
          isChecked: true,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Yandex_Browser_logo.svg/1200px-Yandex_Browser_logo.svg.png',
          contact: 'Coursera',
          text: 'Рекомендуемые курсы',
          date: '20 апр',
          isRead: true
        }
      ],
      isAllSelected: false,
      isCheckedIdList: []
    };

    this.randomMailIncoming();
  }

  // checkAll() {
  //   this.state.messages.forEach(message => {
  //     message.isChecked = this.state.mainCheck;
  //   });
  //   this.setState(prevState => {
  //     return {};
  //   });
  // }

  checkForAllSelect() {
    let counter = 0;
    this.state.messages.forEach(message => {
      if (message.isChecked === true) {
        counter++;
      }
    });
    if (this.state.messages.length === counter) {
      this.setState({ isAllSelected: true });
    } else {
      this.setState({ isAllSelected: false });
    }
  }

  selectAll() {
    const messages = this.state.messages.map(message => {
      message.isChecked = this.state.isAllSelected;
    });
    this.setState({ messages });
  }

  onCheckBoxChange(checkId, isChecked) {
    const isAllChecked = checkId === 'all' && isChecked;
    const isAllUnChecked = checkId === 'all' && !isChecked;

    const messages = this.state.messages.map(message => {
      if (isAllChecked || message.id === checkId) {
        return Object.assign({}, message, {
          checked: isChecked
        });
      }
      if (isAllUnChecked) {
        return Object.assign({}, message, {
          checked: false
        });
      }

      return message;
    });

    const isAllSelected = messages.findIndex(item => item.checked === false) === -1 || isAllChecked;

    this.setState({
      isAllSelected
    });
  }

  async randomMailIncoming() {
    const randomTimer = Math.random() * (300000 - 10) + 10;
    setTimeout(await this.newMail(), randomTimer);
    setTimeout(await this.randomMailIncoming, 300000 - randomTimer);
  }

  deleteMessage() {
    this.setState(prevState => {
      return {
        messages: prevState.messages.filter(message => !prevState.isCheckedIdList[message.id])
      };
    });
  }

  async newMail() {
    const id = count++;
    const image = randomizeImage();
    const contact = randomizeAuthor();
    const text = await randomizeText();
    const date = randomizeDate();
    this.setState(prevState => {
      return {
        messages: [
          {
            id,
            image,
            contact,
            text,
            date,
            isRead: false,
            isChecked: false
          },
          ...prevState.messages
        ]
      };
    });
  }

  render() {
    return (
      <div className="inner">
        <Toolbar
          isAllSelected={this.state.isAllSelected}
          onClick={this.selectAll.bind(this)}
          newMail={this.newMail.bind(this)}
          deleteMessage={this.deleteMessage.bind(this)}
          // setRead={setRead}
        />
        <MessageList messages={this.state.messages} onClick={this.checkForAllSelect.bind(this)} />
        <Footer />
      </div>
    );
  }
}
