import React from 'react';

import './message-creator.css';

class MessageCreator extends React.Component {
  render() {
    return (
      <button className="page__message-creator" type="button" onClick={this.props.createMessage}>
        New Mail
      </button>
    );
  }
}

export default MessageCreator;
