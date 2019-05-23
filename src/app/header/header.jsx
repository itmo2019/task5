import React, { Component } from 'react';

import './header.css';

import Menu from './menu/menu';
import YaMailLogo from './ya-mail-logo/ya-mail-logo';
import SearchBar from './search-bar/search-bar';
import MessageCreator from './message-creator/message-creator';

export class Header extends Component {
  render() {
    return (
      <header className="page__header">
        <Menu />
        <YaMailLogo />
        <SearchBar />
        <MessageCreator createMessage={this.props.createMessage} />
      </header>
    );
  }
}
