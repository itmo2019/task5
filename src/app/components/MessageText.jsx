import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageText extends Component {
  render() {
    return (
      <div className={this.props.textClass}>
        <button className="message-text__hide_button" onClick={this.props.hideMessage}>
          Hide
        </button>
        <div className="message-text__inner-text">{this.props.text}</div>
      </div>
    );
  }
}

MessageText.propTypes = {
  text: PropTypes.object.isRequired,
  textClass: PropTypes.object.isRequired,
  hideMessage: PropTypes.func.isRequired
};

export default MessageText;
