import React, { Component } from 'react';

import './Mail.css';

import yaLogo from '../../../resources/images/ya-logo.png';
import googleLogo from '../../../resources/images/g-logo.png';
import beryLogo from '../../../resources/images/bery-logo.png';
import appleLogo from '../../../resources/images/apple-logo.png';

export class Mail extends Component {
  constructor(props) {
    super(props);
    this.sendIsMarked = this.sendIsMarked.bind(this);
    this.handleMailClick = this.handleMailClick.bind(this);
  }

  render() {
    let marked = this.props.isMailMarked(this.props.id);

    let wasOpened = this.props.wasOpened(this.props.id);
    let senderNameClass = wasOpened
      ? 'mail__sender-name mail__hidden-text'
      : 'mail__sender-name mail__hidden-text mail__content_unread';
    let titleClass = wasOpened
      ? 'mail__title mail__hidden-text'
      : 'mail__title mail__hidden-text mail__content_unread';
    let unreadFlagClass = wasOpened
      ? 'mail__unread-flag mail__unread-flag_read'
      : 'mail__unread-flag';

    return (
      <div className="mail" onClick={this.handleMailClick}>
        <div className="mail__content">
          <input
            type="checkbox"
            className="mail__chooce"
            checked={marked}
            onChange={this.sendIsMarked}
          />
          <img className="mail__sender-logo" src={this.getLogo(this.props.logo)} />
          <span className={senderNameClass}>{this.props.sender}</span>
          <div className={unreadFlagClass} />
          <span className={titleClass}>{this.props.title}</span>
          <time className="mail__time">{this.props.time}</time>
        </div>
      </div>
    );
  }

  handleMailClick = event => {
    let targetName = event.target.className;
    if (targetName !== 'mail__chooce') {
      if (targetName === 'mail__unread-flag' && !!this.props.markRead) {
        this.props.markRead(this.props.id);
        this.forceUpdate();
      } else if (!!this.props.openMail) {
        this.props.openMail(this.props.id);
      }
    }
  };

  sendIsMarked() {
    let wasUpdate = this.props.updateAllMarked(this.props.id);

    if (!wasUpdate) {
      this.forceUpdate();
    }
  }

  getLogo(logoStr) {
    switch (logoStr) {
      case 'yaLogo':
        return yaLogo;
      case 'googleLogo':
        return googleLogo;
      case 'appleLogo':
        return appleLogo;
      case 'beryLogo':
        return beryLogo;
      default:
        return '';
    }
  }
}
