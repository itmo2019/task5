import React, { Component } from 'react';

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
            onChange={() =>
              this.props.onCheckboxChange(
                this.props.emailID,
                !this.props.isSelected
              )
            }
          />
          <img
            className="email__sender-photo"
            src={this.props.iconUrl}
            alt="sender logo"
          />
          <span
            className="email__sender-part email__sender-name"
            onClick={() =>
              this.props.onOpenEmail(this.props.emailID, this.props.text)
            }
          >
            {this.props.senderName}
          </span>
          <div className="email__unread-flag" />
          <div
            className="email__sender-part email__sender-title"
            onClick={() =>
              this.props.onOpenEmail(this.props.emailID, this.props.text)
            }
          >
            {this.props.title}
          </div>
        </div>
      </section>
    );
  }
}
