import React, {Component} from 'react';

import {MailHeader} from './header.jsx';
import {MainPlaceholder} from './main';

import '../styles/animation.css';
import '../styles/body.css';
import '../styles/components.css';
import '../styles/fonts.css';
import '../styles/header.css';
import '../styles/mails-placeholder.css';
import '../styles/main.css';
import '../styles/navigation.css';


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
