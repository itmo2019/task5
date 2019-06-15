import React, { Component } from 'react';

import './letter.css';
import logo from '../images/logo.jpg';

export class Letter extends Component {
  constructor(props) {
    super(props);

    this.changeAnimation = this.changeAnimation.bind(this);
  }

  changeAnimation() {
    if (this.props.changeAnimation) {
      this.props.deleteChosenLetter(this.props.id);
    }
  }

  render() {
    return (
      <div
        className={
          this.props.changeAnimation
            ? 'letter letter__animatedDeleteLetter'
            : 'letter letter__animatedAddLetter'
        }
        onAnimationEnd={this.changeAnimation}
      >
        <input
          className="letter__checkbox"
          type="checkbox"
          checked={this.props.isSelected}
          onChange={() => this.props.switchLetterCheckbox(this.props.id)}
        />
        <a
          href="#"
          className="letter__delLine"
          onClick={() => this.props.openLetter(this.props.text)}
        >
          <img className="letter__yLogo" alt="" src={logo} />
          <span className="letter__textSenderLetter letter_isBold">{this.props.author}</span>
          <div className="letter__markNewLetter" />
          <span className="letter__textLetter letter_isBold">{this.props.subject}</span>
          <span className="letter__data">{this.props.date}</span>
        </a>
      </div>
    );
  }
}
