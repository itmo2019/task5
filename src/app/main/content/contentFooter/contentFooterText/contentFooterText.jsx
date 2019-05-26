import React, { Component } from 'react';

import './contentFooterText.css';

export class ContentFooterText extends Component {
  render() {
    return (
      <span className="content-footer-text__text-endline"><a className="content-footer-text__del-line content-footer-text_unhighlight">{this.props.text}</a></span>
    );
  }
}
