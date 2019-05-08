import React, { Component } from 'react';

import './MailArticle.css';

export class MailArticle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mail-article">
        <div className="mail-article__text">{this.props.text}</div>
        <div className="mail-article__close" onClick={this.props.closeMail}>
          x
        </div>
      </div>
    );
  }
}
