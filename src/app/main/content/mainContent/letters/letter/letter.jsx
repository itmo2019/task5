import React, { Component } from 'react';

import './letter.css';

export class Letter extends Component {
  render() {
    return (
      <div className="letter letter__animated-add-letter">
        <input
          className="letter__checkbox"
          type="checkbox"
          checked={this.props.isChecked}
          onChange={() => this.props.onCheckboxChange(this.props.id)}
        />
        <a
          href="#"
          className="menu-buttons__button_default-link"
          onClick={() => this.props.openLetter(this.props.text)}
        >
          <div className="letter__author-logo">
            <div className="letter__author-abbr">{this.props.authorAbbr}</div>
          </div>
          <div className="letter__author bold-text letter__text">{this.props.author}</div>
          <div className="letter__new-letter-flag letter__new-letter-flag_enabled" />
          <div className="letter__subject bold-text letter__text">{this.props.subject}</div>
          <div className="letter__time">{this.props.date}</div>
        </a>
      </div>
    );
  }
}
