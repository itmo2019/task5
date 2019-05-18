import React, { Component } from 'react';

import './mailBox.css';
import { Buttons } from '../mailBoxButtons/mailBoxButtons';
import { Show } from '../mailBoxShow/mailBoxShow';
import { Letters } from '../mailBoxLetters/mailBoxLetters';
import { Footer } from '../mailBoxFooter/mailBoxFooter';

export class MailBox extends Component {
  render() {
    return (
      <section className="mail-box">
        <Buttons
          setDeleteAnimation={this.props.setDeleteAnimation}
          changeCheckedAll={this.props.changeCheckedAll}
          ifCheck={this.props.ifCheck}
        />
        <Show
          letters={this.props.letters}
          hidden={this.props.hidden}
          shownText={this.props.shownText}
          closeLetter={this.props.closeLetter}
        />
        <Letters
          letters={this.props.letters}
          hidden={this.props.hidden}
          changeChecked={this.props.changeChecked}
          openLetter={this.props.openLetter}
          deleteLetters={this.props.deleteLetters}
          deleteAddAnimation={this.props.deleteAddAnimation}
        />
        <Footer />
      </section>
    );
  }
}
