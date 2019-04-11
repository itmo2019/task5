import React from 'react';

import './messages-block.css';
import Header from './header/header';
import HiddenMessage from './hidden-message/hidden-message';
import MessageTemplate from './message-template/message-template';
import Footer from './footer/footer';

class MessagesBlock extends React.Component {
  constructor(props) {
    super(props);
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);

    this.state = {
      hiddenMessageText: this.props.hiddenMessageText,
      messageIsOpen: this.props.messageIsOpen
    };
  }

  closeMessage() {
    this.setState({
      messageIsOpen: false,
    });
  }

  openMessage(message) {
    console.log(message.hiddenText);
    this.setState({
      messageIsOpen: true,
      hiddenMessageText: message.hiddenText
    });
  }

  render() {
    let messagesListClassAddition = !this.state.messageIsOpen ? '__open' : '__closed';
    return <div className="messages-block">
      <Header selectAll={this.props.selectAll} deleteSelected={this.props.deleteSelected}/>
      <HiddenMessage closeMessage={this.closeMessage} messageIsOpen={this.state.messageIsOpen}
                     hiddenMessageText={this.state.hiddenMessageText}/>
      <div className={"messages-list messages-list" + messagesListClassAddition}>
        {this.props.messagesList.map(message => {
          return (
            <MessageTemplate message={message} openMessage={this.openMessage}
            />
          );
        })}
      </div>
      <Footer/>
    </div>;
  }
}

export default MessagesBlock;
