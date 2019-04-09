import React, { Component } from 'react';
import Check from '../check/check';
import './letter.css';
import '../letterBox/letterBox.css';

function LetterItem(props) {
  return <li className={`letter__item ${props.className}`}>{props.children}</li>;
}

export default class Letter extends Component {
  static displayName = 'Letter';

  DELTA_TIME = 20;

  constructor(props) {
    super(props);
    this.state = {
      hasAddAnimation: false
    };
  }

  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.setState({ hasAddAnimation: true });
    }, this.DELTA_TIME);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  render() {
    const {
      className,
      authorLogo,
      authorName,
      topic,
      date,
      handleMailClick,
      hiddenMail,
      hasRemoveAnimation,
      isUnread
    } = this.props;
    const { hasAddAnimation } = this.state;
    return (
      <li
        className={`
        letter ${className}
        ${isUnread ? 'letter_unread' : ''}
        ${hasAddAnimation ? 'letter_has-add-animation' : ''}
        ${hasRemoveAnimation ? 'letter_has-remove-animation' : ''}
        `}
        hidden={hiddenMail}
      >
        <ul className="letter__line">
          <LetterItem>
            <Check {...this.props} />
          </LetterItem>
          <LetterItem className="letter__author">{authorLogo}</LetterItem>
          <LetterItem className="letter__author-name">{authorName}</LetterItem>
          <LetterItem
            className={`letter__read-mark ${isUnread ? 'letter__read-mark_unread' : ''}`}
          />
          <LetterItem className="letter__topic">{topic}</LetterItem>
          <LetterItem className="letter__date">{date}</LetterItem>
        </ul>
        <a className="letter__link-open" onClick={handleMailClick} />
        <hr className="letter-box__hr" />
      </li>
    );
  }
}
