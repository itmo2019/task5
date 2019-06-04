import React, { Component } from 'react';

import './app.css';

export class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log('MAIL', this.props.sender, 'hide?', this.props.hide)

    return (
      <article className={"mail " + (this.props.hide ? "hide" : "mail__open")} onClick={() => this.props.onLetterClick()}>
        <button className={"mail__checkmark checkmark checkmark--" + (this.state.chosen ? "chosen" : "unchosen")} onClick={ e => {
          e.stopPropagation();
          this.setState({chosen: !this.state.chosen})
        }}></button>
        <div className="mail__autho-logo">{this.props.sender[0]}</div>
        <div className={"mail__from mail__from--" + (this.props.read ? "read" : "unread")}>
          <div className="mail__from__inner">
            {this.props.sender}
          </div>
        </div>
        <div className={"mail__mark mail__mark--" + (this.props.read ? "read" : "unread")}></div>
        <div className={"mail__message mail__message--" + (this.props.read ? "read" : "unread")}>
          <div className="mail__message__inner">
            {this.props.content}
          </div>
        </div>
        <time className="mail__date">{this.props.date}</time>
      </article>
    );
  }
}

export default Mail;
