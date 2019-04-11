import React from 'react';

import './hidden-message.css';

class HiddenMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenMessageText: this.props.hiddenMessageText
    };
  }

  render() {
    let classAddition = this.props.messageIsOpen ? '__open' : '__closed';
    return <div className={"hidden-message hidden-message" + classAddition}>
      <div className="close-message" onClick={() => {this.props.closeMessage()}}>&times;</div>

      <div className="hidden-message__content">
        {this.props.hiddenMessageText}
      </div>

    </div>;
  }
}

export default HiddenMessage;
