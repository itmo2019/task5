import React from 'react';

import './messages-block.css';
import Header from './header/header';
import HiddenMessage from './hidden-message/hidden-message';
import MessageTemplate from './message-template/message-template';
import Footer from './footer/footer';

class MessagesBlock extends React.Component {
  constructor(props) {
    super(props);
    this.setHiddenTextAndOpen = this.setHiddenTextAndOpen.bind(this);

    this.state = {
      hiddenMessageText: ''
    };
  }

  setHiddenTextAndOpen(message) {
    // this.setState({hiddenMessageText: message.hiddenText});
    this.props.openMessage();
  }

  render() {
    return <div className="messages-block">
      <Header selectAll={this.props.selectAll} deleteSelected={this.props.deleteSelected}/>
      <HiddenMessage closeMessage={this.props.closeMessage} messageIsOpen={this.props.messageIsOpen}
                     hiddenMessageText={this.state.hiddenMessageText}/>
      <div className="messages-list">
        {this.props.messagesList.map(message => {
          return (
            <MessageTemplate message={message} openMessage={this.setHiddenTextAndOpen(message)}
            />
          );
        })}
      </div>
      <Footer/>
    </div>;
  }
}

export default MessagesBlock;
