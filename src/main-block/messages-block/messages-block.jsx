import React from 'react';

import './messages-block.css';
import Header from './header/header';
import HiddenMessage from './hidden-message/hidden-message';
import MessageTemplate from './message-template/message-template';
import Footer from './footer/footer';

class MessagesBlock extends React.Component {
  render() {
    return <div className="messages-block">
      <Header selectAll={this.props.selectAll} deleteSelected={this.props.deleteSelected}/>
      <HiddenMessage closeMessage={this.props.closeMessage}/>
      <MessageTemplate/>
      <div className="messages-list">

      </div>
      <Footer/>
    </div>;
  }
}

export default MessagesBlock;
