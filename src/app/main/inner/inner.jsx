import React, {Component} from 'react';

import './inner.css';

import Toolbar from './toolbar';
import MessageList from './message-list';
import Footer from './footer';

export default class Inner extends Component{
  render() {
    return (
      <div className="inner">
        <Toolbar />
        <MessageList />
        <Footer />
      </div>
    );
  }
}
