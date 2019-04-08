import React, { Component } from 'react';

import '../../styles/mail-screen/EMail.css';

export class EMail extends Component {
  render() {
    return (
      <section className="mail-screen-element-wrapper">
        <div
          className={`email \
                        ${this.props.isUnread ? 'unread' : ''} \
                        ${
                          this.props.removingSelected && this.props.isSelected
                            ? 'bounceOutRight'
                            : ''
                        } \
                        ${this.props.animateAppearance ? 'bounceIn' : ''}`}
        >
          <div className="email__mail-date">
            {this.props.dateDay} {this.props.dateMonth}
          </div>
          <input
            type="checkbox"
            className="mail-screen__checkbox"
            checked={this.props.isSelected}
            onChange={() => this.props.onCheckboxChange(this.props.emailID, !this.props.isSelected)}
          />
          <img className="email__sender-photo" src={this.props.iconUrl} alt="sender logo" />
          <a
            href={`#email_${this.props.emailID}`}
            className="email__sender-part email__sender-name link-without-style"
            onClick={() => this.props.onOpenEmail(this.props.emailID, this.props.text)}
          >
            {this.props.senderName}
          </a>
          <div className="email__unread-flag" />
          <a
            href={`#email_${this.props.emailID}`}
            className="email__sender-part email__sender-title link-without-style"
            onClick={() => this.props.onOpenEmail(this.props.emailID, this.props.text)}
          >
            {this.props.title}
          </a>
        </div>
      </section>
    );
  }
}
