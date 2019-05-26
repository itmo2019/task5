import React, { Component } from 'react';

import './letter.css';
import logo from '../../../../../header/images/logo.jpg';

export class Letter extends Component {
  constructor(props) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
    this.deleteAnimation = this.deleteAnimation.bind(this);
  }

  makeClassName() {
    const className = ['letter'];
    if (this.props.addAnimation) {
      className.push('letter__animated-add-letter');
    }
    if (this.props.deleteAnimation) {
      className.push('letter__animated-delete-letter');
    }
    return className.join(' ');
  }

  deleteAnimation() {
    if (this.props.addAnimation) {
      this.props.removeAnimation(this.props.id);
    }
    if (this.props.deleteAnimation) {
      this.props.deleteLetter(this.props.id);
    }
  }

  render() {
    return (
      <div className={this.makeClassName()} onAnimationEnd={this.deleteAnimation}>
        <input
          className="letter__checkbox"
          type="checkbox"
          checked={this.props.isChecked}
          onChange={() => this.props.changeCheckbox(this.props.id)}
        />
        <a
          href="#"
          className="letter__del-line"
          onClick={() => this.props.openLetter(this.props.text)}
        >
          <img className="letter__y-logo" alt="" src={logo} />
          <span className="letter__text-sender-letter letter_is-bold">{this.props.author}</span>
          <div className="letter__mark-new-letter" />
          <span className="letter__text-letter letter_is-bold">{this.props.subject}</span>
          <span className="letter__data">{this.props.date}</span>
        </a>
      </div>
    );
  }
}
