import React, { Component } from 'react';

import './content.css';
import '../page/page.css';

import { MessageMenu } from '../messageMenu/messageMenu';
import { Letters } from '../letters/letters';
import { Letter } from '../letter/letter';
import { Footer } from '../footer/footer';

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letterIsVisible: false
    };

    this.showLetter = this.showLetter.bind(this);
    this.closeLetter = this.closeLetter.bind(this);
  }

  showLetter() {
    this.setState({
      letterIsVisible: true
    });
  }

  closeLetter() {
    this.setState({
      letterIsVisible: false
    });
  }

  render() {
    return (
      <main id="main-content" className="content">
        <label htmlFor="menu-checkbox">
          <input
            id="menu-checkbox"
            className="page__my-input content__my-checkbox"
            type="checkbox"
            checked={this.props.isSelectAll}
            onChange={this.props.selectAll}
          />
        </label>
        <MessageMenu deleteMessages={this.props.deleteMails} />
        <div className="page__line" />

        <Letters
          letters={this.props.letters}
          checkboxChange={this.props.checkboxChange}
          checked={this.props.checked}
          setText={this.props.setText}
          setRead={this.props.setRead}
          removeAddAnimation={this.props.removeAddAnimation}
          display={!this.state.letterIsVisible}
          showLetter={this.showLetter}
        />
        <Letter
          text={this.props.text}
          display={this.state.letterIsVisible}
          closeLetter={this.closeLetter}
        />
        <Footer />
      </main>
    );
  }
}
