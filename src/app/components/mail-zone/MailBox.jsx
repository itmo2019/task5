import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MailBoxActions } from './MailBoxActions';
import { toggleMessages } from '../../store/actions';
import MessagesList from './MessagesList';
import OpenedMessage from './OpenedMessage';

import '../../styles/mail-box/mail-box.css';

class MailBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedMessage: -1
    };
  }

  onOpenMessage(messageId) {
    this.setState({ openedMessage: messageId });
  }

  onCloseMessage() {
    this.setState({ openedMessage: -1 });
  }

  render() {

    console.log("here");
    console.log(this.props.messages);
    console.log(this.state.openedMessage);
    return (
      <div className="mail-box">
        <MailBoxActions />
        {this.state.openedMessage !== -1 ? (
          <OpenedMessage
            message={this.props.messages.find(message => message.id === this.state.openedMessage)}
            onCloseMessage={() => this.onCloseMessage()}
          />
        ) : (
          <MessagesList
            onCheckBoxChange={() => this.props.onCheckBoxChange()}
            onOpenMessage={messageId => this.onOpenMessage(messageId)}
            messages={this.props.messages}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.mailBox.messages.filter(message => message.isShown)
  };
};

export default connect(
  mapStateToProps,
  { onCheckBoxChange: id => toggleMessages(id) }
)(MailBox);
