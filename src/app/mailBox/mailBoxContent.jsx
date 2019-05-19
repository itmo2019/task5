import React, { Component } from 'react';

import './mailBoxContent.css';
import { Message } from './message';
import { generateMessage } from '../../messageGen';

const MAX_MESSAGES = 30;

export class MailBoxContent extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], clickedMessageContent: '' };
  }

  componentDidMount() {
    // const timeout = 60 * 1000 * (5 + Math.floor(Math.random() * 5));
    const timeout = 3000;
    this.adderID = setInterval(() => this.newMail(), timeout);
  }

  componentWillUnmount() {
    clearInterval(this.adderID);
  }

  newMail() {
    const newMessageObj = generateMessage();
    this.setState(state => {
      const updMessages = [newMessageObj].concat(state.messages);
      return { messages: updMessages };
    });
  }

  messageClickHandler(content) {
    console.log(this);
    this.setState({ clickedMessageContent: content });
  }

  render() {
    return (
      <div className="mail-box-content">
        <input type="checkbox" id="message-click"/>
        <div className="article mail-box-content__article">
          <label className="article__cross" htmlFor="message-click">
            X
          </label>
          <p className="article__content">
            {this.state.clickedMessageContent}
          </p>
        </div>
        <ul className="messages-list">
          {this.state.messages.slice(0, MAX_MESSAGES).map(msg => {
            return <Message message={msg} key={msg.id}
                            messageClickHandler={() => this.messageClickHandler(msg.content)}/>;
          })}
        </ul>
      </div>
    );
  }
}
