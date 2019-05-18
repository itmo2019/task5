import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageItem extends Component {
  render() {

    const messageClassName =
      this.props.deleted
        ?
        'message-block__deleted message-block__row message-block__central-row message-block_central-row-unread'
        : (this.props.animBefore ?
        (this.props.read ?
        'message-block__central-row_read message-block__row message-block__central-row' :
        'message-block__central-row_unread message-block__row message-block__central-row'):
        'new-message__appear message-block__new-message message-block__central-row_unread message-block__row message-block__central-row'
  );

    return (
      <div id={this.props.id}
           className={messageClassName}>
        <div className="central-row__open-message_button" id="1"
             onClick={this.props.showMessage.bind(this, this.props.id)}/>
        <label className="check">
          <input
            className="check__input check__regular"
            type="checkbox"
            onChange={this.props.changeSelected.bind(this, this.props.id)}
            checked={this.props.selected}
          />
        </label>
        <div className="central-row__avatar-frame">
          <div className="central-row__ya-circle"><a className="ya-circle__ya-letter">Я</a></div>
        </div>
        <div className="central-row__msg-sender">Яндекс Паспорт</div>
        <div className="central-row__point"/>
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
  text: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  changeSelected: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  deleted: PropTypes.object.isRequired,
  animBefore: PropTypes.object.isRequired,
  read: PropTypes.bool.isRequired
};

export default MessageItem;
