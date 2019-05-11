import React, { Component } from 'react';

import './app.css';
import { Header } from './structure/header/header';
import { Menu } from './structure/menu/menu';
import { MainContent } from './structure/main-content/mainContent';

export class App extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  // type2: 'reset'
  // allSelected: false,
  // folder: FOLDER_INBOX,
  // deleteSelected: false
  // };
  // }

  render() {
    return (
      <div className="app">
        <Header/>
        <Menu/>
        <MainContent/>
      </div>
    );
  }
}
