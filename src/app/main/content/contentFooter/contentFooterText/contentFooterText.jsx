import React, { Component } from 'react';

import './contentFooterText.css';

export class ContentFooterText extends Component {
  render() {
    return (
      <div className="content-footer__text">{this.props.text}</div>
    );
  }
}
