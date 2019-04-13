import React, { Component } from 'react';

import './mails.css';
import Letters from '../letters';
import Footer from '../footer';
import MailsActions from '../mails-actions';

export class Mails extends Component {
  render() {
    return (
      <div id="mails">
        <MailsActions selectAll={this.props.selectAll} removeLetters={this.props.removeLetters} />
        <Letters letters={this.props.letters} selectLetter={this.props.selectLetter} />
        <Footer />
      </div>
    );
  }
}

export default Mails;
