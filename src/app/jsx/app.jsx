import React, {Component} from 'react';

import {MailHeader} from './header.jsx';
import {MainPlaceholder} from './main';
import '../styles/body.css';


export class App extends Component {
  render() {
    return (
      <div className="body">
        <MailHeader/>
        <MainPlaceholder/>
      </div>
    );
  }
}
