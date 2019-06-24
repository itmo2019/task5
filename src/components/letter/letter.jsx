import React, { Component } from 'react';

import './letter.css';
import './mail-opened.css';

export class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      deletingRight: false,
      deletingLeft: false
    };
    setTimeout(
      () =>
        this.setState(() => ({
          added: true
        })),
      20
    );
    this.openLetter = this.openLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
    this.changeChecking = this.changeChecking.bind(this);
    this.deleting = this.deleting.bind(this);
  }

  deleting() {
    if (Math.random() > 0.5) {
      this.setState(() => ({
        deletingRight: true
      }));
    } else {
      this.setState(() => ({
        deletingLeft: true
      }));
    }
  }

  closeLetter() {
    this.props.closeLetter(this.props.id);
  }

  openLetter() {
    this.props.openLetter(this.props.id);
  }

  changeChecking() {
    this.props.changeChecking(this.props.id);
  }

  render() {
    return (
      <label>
        <div
          className={`letters__letter letter msg-adding-start ${
            this.props.displayed.has(this.props.id) ? '' : 'hidden'
          } ${this.state.added ? 'msg-adding-finish' : ''}
            ${this.state.deletingRight ? 'msg-deleting-right' : ''}
            ${this.state.deletingLeft ? 'msg-deleting-left' : ''}`}
        >
          <input className="letter__choose" type="checkbox" onClick={this.openLetter} />
          <div
            className="letter__mail-opened mail-opened"
            id={`${this.props.openedId === this.props.id ? 'letter__choose' : ''}`}
          >
            <label className="mail-opened__close2" onClick={this.closeLetter}>
              ×
            </label>
            <div className="mail-opened__text">{this.props.text}</div>
          </div>
          <input
            checked={this.props.checked}
            type="checkbox"
            onChange={this.changeChecking}
            className="letter__checkbox"
          />
          <div className="letter__pic letter__unread">{this.props.sender[0]}</div>
          <span className="letter__sender letter__unread">{this.props.sender}</span>
          <div className="letter__msg-mark letter__mark-unread" />
          <span className="letter__message letter__unread">{this.props.message}</span>
          <time className="letter__date-msg" dateTime={this.props.formatedDate}>
            {this.props.date}
          </time>
        </div>
      </label>
    );
  }
}
