import React, { Component } from 'react';

import './letter-view.css';

import { Checkbox } from '../checkbox/checkbox';

export class LetterView extends Component {
  render() {
    return (
      <div
        className="letter-view"
        onClick={this.props.showLetter}
        onKeyPress=""
        role="button"
        aria-hidden
      >
        <Checkbox id={this.props.checkboxId} foo={this.props.fooForCheckbox} />
        <div className="letter-view__photo" />
        <div className="letter-view__author">{this.props.author}</div>
        <div className="letter-view__readed" />
        <div className="letter-view__theme">{this.props.theme}</div>
        <div className="letter-view__content">{this.props.content}</div>
        <div className="letter-view__data">
          <time dateTime="2019-03-01">3 мар</time>
        </div>
      </div>
    );
  }
}
