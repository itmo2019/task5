import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageBlock from './MessageBlock';

class MessageItem extends Component {
  render() {
    return (
      <div class="message-block__row message-block__central-row message-block__central-row_unread">
        <div className="central-row__open-message_button" id="1" onClick="showMessage(this.id)"></div>
        <label className="check">
          <input className="check__input check__regular" type="checkbox"></input>
        </label>
        <div className="central-row__avatar-frame">
          <div className="central-row__ya-circle"><a className="ya-circle__ya-letter">Я</a></div>
        </div>
        <div className="central-row__msg-sender">Яндекс Паспорт</div>
        <div className="central-row__point"></div>
        <div className="central-row__msg-theme">{this.props.theme}</div>
        <div className="central-row__date">6 авг</div>
      </div>
    );
  }
}

MessageItem.propTypes = {
  id: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired
}

export default MessageItem;
