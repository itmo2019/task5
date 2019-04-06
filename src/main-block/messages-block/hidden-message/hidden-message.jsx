import React from 'react';

import './hidden-message.css';

class HiddenMessage extends React.Component {
  render() {
    return <div className="hidden-message">
      <div className="close-message" onClick={this.props.closeMessage}>&times;</div>

      <div className="hidden-message__content">

      </div>

    </div>;
  }
}

export default HiddenMessage;
