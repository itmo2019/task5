import React, { Component } from 'react';

import './letter.css';

export class Letter extends Component {
  render() {
    return (
      <section className="letter letter-creation-animation">
        <input
          type="checkbox"
          className="letter__checkbox hidden-checkbox"
          checked={this.props.isChecked}
          onChange={() => this.props.changeCheckboxStatus(this.props.id)}
        />
        <span
          className="decorative-checkbox letter__decorative-checkbox"
        />
        <label
          className="letter__label"
          htmlFor="check-label"
          id={'letter' + this.props.id}
          onClick={() => this.props.openLetter(this.props.theme, this.props.text)}
        >
          <img className="letter__img" src={'https://thispersondoesnotexist.com/image?randomSeed=' + this.props.id} alt="ava"/>
          <h2 className="letter__from bold hide-overflow">{this.props.from}</h2>
          <div className="letter__read-status unchecked" />
          <p className="letter__date hide-overflow">{this.props.date}</p>
          <h3 className="letter__theme bold hide-overflow">{this.props.theme}</h3>
          <div className="line letter__line" />
        </label>
      </section>
    );
  }
}
