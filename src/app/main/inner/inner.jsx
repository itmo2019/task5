import React from 'react';

import Toolbar from './toolbar';
import MessageList from './message-list';
import Footer from './footer';
import {
  randomizeAuthor,
  randomizeText,
  randomizeDate,
  randomizeImage
} from './message-list/message/message__composer';

import './inner.css';
import main from '../main';

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
      isCheckedIdList: [true]
    };

    this.selectAll = this.selectAll.bind(this);
    this.newMail = this.newMail.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  componentDidMount() {
    this.randomTimer = setInterval(() => this.newMail(), 300000);
  }

  componentWillUnmount() {
    clearInterval(this.randomTimer);
  }

  handleCheckBoxClick(id) {
    const check = this.state.isCheckedIdList;
    check[id] = !check[id];
    const checker = check.every(Chk => {
      return Chk === true;
    });
    this.setState(() => ({ isCheckedIdList: check, isAllSelected: checker }));
  }

  selectAll() {
    let mainCheck = this.state.isAllSelected;
    mainCheck = !mainCheck;
    const newCheckList = this.state.isCheckedIdList;
    newCheckList.fill(mainCheck);
    this.setState(() => ({ isCheckedIdList: newCheckList, isAllSelected: mainCheck }));
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
    const check = this.state.isCheckedIdList;
    check.push(false);
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
        ],
        isCheckedIdList: check
      };
    });
  }

  render() {
    return (
      <div className="inner">
        <Toolbar
          isAllSelected={this.state.isAllSelected}
          selectAll={this.selectAll}
          newMail={this.newMail}
          deleteMessage={this.deleteMessage}
          // setRead={setRead}
        />
        <MessageList
          messages={this.state.messages}
          handleCheckBoxClick={this.handleCheckBoxClick}
          isCheckedIdList={this.state.isCheckedIdList}
        />
        <Footer />
      </div>
    );
  }
}
