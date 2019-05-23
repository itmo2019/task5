import React, { Component } from 'react';

import './MailBody.css'

export class MailBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="mail-body">
        <p className="mail-body__text">{this.props.text}</p>
        <div className="mail-body__close" onClick={this.props.closeMail}>
          &times;
        </div>
      </div>
    );
  }
}

