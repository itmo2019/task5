import React from 'react';

import './messages-block.css';
import Header from './header/header';
import HiddenMessage from './hidden-message/hidden-message';
import MessageTemplate from './message-template/message-template';
import Footer from './footer/footer';

function MessagesBlock() {
  return  <div className="messages-block">
    <Header />
    <HiddenMessage />
    <MessageTemplate />
    <div className="messages-list">

    </div>
    <Footer />
  </div>;
}

export default MessagesBlock;
