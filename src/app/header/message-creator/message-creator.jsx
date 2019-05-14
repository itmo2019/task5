import React from 'react';

import './message-creator.css';

function MessageCreator() {
  return (
    <button
      className="page__message-creator"
      type="button"
      // onclick={this.props.createMessageFunction}
    >
      New Mail
    </button>
  );
}

export default MessageCreator;
