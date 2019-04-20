import React from 'react';
import Check from '../check/check';

import './letter.css';
import '../lettersWindow/lettersWindow.css';

const DELAY_TIME = 20;

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAddAnimation: false
    };
  }

  componentDidMount() {
    const self = this;
    function animateImpl() {
      self.setState({ hasAddAnimation: true });
    }
    this.animationTimeoutId = setTimeout(animateImpl, DELAY_TIME);
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimeoutId);
  }

  render() {
    const {
      date,
      openMessage,
      isLetterHidden,
      hasRemoveAnimation,
      senderPic,
      senderName,
      messageText
    } = this.props;
    const { hasAddAnimation } = this.state;
    let liClassName = '';
    if (hasAddAnimation && hasRemoveAnimation) {
      liClassName =
        'letter letter-box__letter letter_has-add-animation letter_has-remove-animation';
    } else if (hasAddAnimation && !hasRemoveAnimation) {
      liClassName = 'letter letter-box__letter letter_has-add-animation';
    } else if (!hasAddAnimation && hasRemoveAnimation) {
      liClassName = 'letter letter-box__letter letter_has-remove-animation';
    } else {
      liClassName = 'letter letter-box__letter';
    }
    return (
      <li className={liClassName} hidden={isLetterHidden}>
        <ul className="letter__line">
          <li className="letter__item">
            <Check {...this.props} />
          </li>
          <li className="letter__item letter__sender-pic">{senderPic}</li>
          <li className="letter__item letter__sender-name">{senderName}</li>
          <li className="letter__item letter__read-circle" />
          <li className="letter__item letter__text">{messageText}</li>
          <li className="letter__item letter__date">{date}</li>
        </ul>
        <a className="letter__open-trigger" onClick={openMessage} />
        <hr className="letter-box__hr" />
      </li>
    );
  }
}

export default Letter;
