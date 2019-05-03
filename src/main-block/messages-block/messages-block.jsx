import React from 'react';

import './messages-block.css';
import Header from './header/header';
import HiddenMessage from './hidden-message/hidden-message';
import Message from './message/message';
import Footer from './footer/footer';

class MessagesBlock extends React.Component {
  constructor(props) {
    super(props);
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.selectCheckbox = this.selectCheckbox.bind(this);
    this.state = {
      hiddenMessageText: this.props.hiddenMessageText,
      messageIsOpen: false,
      selectAllCheckbox: false,
      messagesList: this.props.messagesList
    };
  }

  closeMessage() {
    this.setState({
      messageIsOpen: false
    });
  }

  openMessage(message) {
    this.setState({
      messageIsOpen: true,
      hiddenMessageText: message.hiddenText
    });
  }

  handleSelectAll() {
    this.setState(prevState => {
      const newMessagesList = prevState.messagesList;
      for (let i = 0; i < newMessagesList.length; i++) {
        if (!newMessagesList[i].shrink) {
          newMessagesList[i].selected = !prevState.selectAllCheckbox;
        }
      }

      return {
        selectAllCheckbox: !prevState.selectAllCheckbox,
        messagesList: newMessagesList
      };
    });
  }

  selectCheckbox(messageIndex) {
    this.setState(prevState => {
      const newMessagesList = prevState.messagesList;
      newMessagesList[messageIndex].selected = !newMessagesList[messageIndex].selected;
      return {
        messagesList: newMessagesList
      };
    });
  }

  render() {
    this.state.messagesList = this.props.messagesList;
    this.state.selectAllCheckbox = this.state.messagesList.some(message => message.selected);
    const messagesListClassAddition = !this.state.messageIsOpen ? '__open' : '__closed';
    return (
      <div className="messages-block">
        <Header
          handleSelectAll={this.handleSelectAll}
          deleteSelected={this.props.deleteSelected}
          selectAllCheckbox={this.state.selectAllCheckbox}
        />
        <HiddenMessage
          closeMessage={this.closeMessage}
          messageIsOpen={this.state.messageIsOpen}
          hiddenMessageText={this.state.hiddenMessageText}
        />
        <div className={`messages-list messages-list${messagesListClassAddition}`}>
          {this.props.messagesList.map((message, messageIndex) => {
            return (
              <Message
                message={message}
                openMessage={this.openMessage}
                selectCheckbox={this.selectCheckbox}
                messageIndex={messageIndex}
                key={message.id}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MessagesBlock;
