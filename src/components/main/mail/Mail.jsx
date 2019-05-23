import React, { Component } from 'react';

import './Mail.css';

export class Mail extends Component {
  constructor(props) {
    super(props);
    this.notifyIsMarked = this.notifyIsMarked.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let marked = this.props.isMailMarked(this.props.id);
    let justAdded = this.props.justAdded;
    let toDelete = this.props.toDelete;
    const mailClass = `mail${toDelete ? ' mail_deleted' : ''} ${
      justAdded ? ' just-added' : 'already-added'
      }`;
    console.log(mailClass)
    const logoClass = 'mail__sender-logo';
    const senderClass = 'mail__author mail__text-overflow  mail__unread';
    const messageBodyClass = 'mail__message-body mail__message-body_view mail__text-overflow mail__unread';
    const readStatusClass = 'read-status read-status_view read-status_not-read';
    return (
      <div className={mailClass} onClick={this.handleClick}>
        <div className="chose chose_view mail__elem mail__elem_view">
          <input
            type="checkbox"
            className="mail__checkbox"
            checked={marked}
            onChange={this.notifyIsMarked}
          />
        </div>
        <span className={logoClass}>{this.props.logo}</span>
        <span className={senderClass}>{this.props.sender}</span>
        <div className={readStatusClass}/>
        <span className={messageBodyClass}>{this.props.title}</span>
        <time className="message-date message-date_view">{this.props.time}</time>
      </div>

    );
  }

  handleClick(event) {
    let targetName = event.target.className;
    if (targetName !== 'mail__checkbox') {
      this.props.openMail(this.props.id);
    }
  }

  notifyIsMarked() {
    let wasUpdate = this.props.updateAllMarked(this.props.id);
    if (!wasUpdate) {
      this.setState({})
    }
  }
}


