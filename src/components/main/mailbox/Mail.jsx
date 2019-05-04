import React, { Component } from 'react';

import './Mail.css';

export class Mail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mail">
        <div className="mail__content mail__content_unread">
          <CheckBox />
          <img className="mail__sender-logo" src={this.props.logo} />
          <span className="mail__sender-name mail__sender-name__hidden-text" />
          <div className="mail_unread-flag" />
          <span className="mail__title mail__title__hidden-text" />
          <time className="mail__time" />
          <div className="mail__text" />
        </div>
      </div>
    );
  }
}

export class CheckBox extends Component {
  render() {
    return <input type="checkbox" className="mail__chooce" onClick="checkMarkAllCheckBox()" />;
  }
}
