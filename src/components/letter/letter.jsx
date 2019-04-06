import React, { Component } from 'react';

import Check from '../check/check';

import './letter.css';
import '../letterBox/letterBox.css';

function LetterItem(props) {
  return <li className={`Letter__Item ${props.className}`}>{props.children}</li>;
}

export default class Letter extends Component {
  static displayName = 'Letter';

  DELTA_TIME = 20;

  constructor(props) {
    super(props);
    this.state = {
      className: `Letter Letter_Unread ${props.className}`,
      hidden: false
    };

    this.setHidden = this.setHidden.bind(this);

    props.updateSetHidden(this.setHidden);
  }

  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.setState(state => {
        return { className: `${state.className} Letter_Added` };
      });
    }, this.DELTA_TIME);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  setHidden(value) {
    this.setState({ hidden: value });
  }

  /** @namespace props.authorLogo */
  /** @namespace props.authorName */
  /** @namespace props.letterContent */
  render() {
    return (
      <li className={this.state.className} hidden={this.state.hidden}>
        <ul className="Letter__Line">
          <LetterItem>
            <Check />
          </LetterItem>
          <LetterItem className="Letter__Author">{this.props.authorLogo}</LetterItem>
          <LetterItem className="Letter__AuthorName">{this.props.authorName}</LetterItem>
          <LetterItem className="Letter__ReadMark Letter__ReadMark_Unread" />
          <LetterItem className="Letter__Topic">{this.props.letterContent}</LetterItem>
          <LetterItem className="Letter__Date">{this.props.date}</LetterItem>
        </ul>
        <a className="Letter__LinkOpen" onClick={this.props.handleMailClick} />
        <hr className="LetterBox__Hr" />
      </li>
    );
  }
}
