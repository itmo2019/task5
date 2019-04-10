import React from 'react';

import './hidden-message.css';

class HiddenMessage extends React.Component {
  render() {
    let classAddition = this.props.messageIsOpen ? '__open' : '__close';
    return <div className={"hidden-message" + classAddition}>
      <div className="close-message" onClick={this.props.closeMessage}>&times;</div>

      <div className="hidden-message__content">
        {this.props.hiddenMessageText}
      </div>

    </div>;
  }
}

export default HiddenMessage;
