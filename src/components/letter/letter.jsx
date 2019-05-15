import React, { Component } from 'react';
import Check from '../check/check';
import './letter.css';
import '../letterBox/letterBox.css';

function LetterItem(props) {
  const { className, children } = props;
  return <li className={`letter__item ${className}`}>{children}</li>;
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
    this.timerID = setTimeout(this.setAddAnimation, this.DELTA_TIME);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  setAddAnimation = () => {
    this.setState({ hasAddAnimation: true });
  };

  render() {
    const {
      className,
      authorLogo,
      authorName,
      topic,
      date,
      handleMailClick,
      handleMailCheckClick,
      hiddenMail,
      hasRemoveAnimation,
      isUnread,
      isChecked
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
            <Check onChange={handleMailCheckClick} isChecked={isChecked} />
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
