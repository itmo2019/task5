import React from 'react';

class MessageTemplate extends React.Component {
  render() {
    console.log(this.props);
    console.log('123');
    console.log(this.props.message);
    return <div id={this.props.message.id} className="message">
      <label className="select-message__checkbox-label" htmlFor={"checkbox-" + this.props.message.id}>
        <input type="checkbox" className="select-message__checkbox checkbox" id={"checkbox-" + this.props.message.id}/>
      </label>
      <label onClick={this.props.openMessage}>
        <div className="message-info__sender-logo">{this.props.message.senderLogo}
        </div>
        <div className="message-info__sender bold">{this.props.message.senderName}</div>
        <div className="message-info__mark unread-mark"></div>
        <div className="message-info__subject bold">{this.props.message.subject}
        </div>
        <div className="message-info__date-container">
          <div className="date-container__date">{this.props.message.date}</div>
        </div>
      </label>
    </div>
  }
}

export default MessageTemplate;
