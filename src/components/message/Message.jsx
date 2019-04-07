import React from 'react';
import './Message.css';

export class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  render() {
    const messageData = this.props.messageData;
    return (
      <div>
        {this.state.opened === true ? (
          <div className="hidden-box">
            <div
              className="hidden-box__cancel-btn"
              onClick={() => {
                this.setState({ opened: false });
              }}
            >
              X
            </div>
            <div className="hidden-box__content">{messageData.text}</div>
          </div>
        ) : (
          <div
            className="message"
            onClick={() => {
              this.setState({ opened: true });
            }}
          >
            <input className="message__checkbox" type="checkbox" />
            <div className="sender-img message__sender-img">{messageData.firstLetterSender}</div>
            <div className="message__sender">{messageData.sender}</div>
            <span className="message__unread-circle" />
            <div className="message__theme">{messageData.theme}</div>
            <div className="message__date">{messageData.date}</div>
          </div>
        )}
      </div>
    );
  }
}
