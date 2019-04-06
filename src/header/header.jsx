import React from 'react';

import './header.css';

import Menu from './menu/menu';
import YandexServiceLogo from './yandex-service-logo/yandex-service-logo';
import SearchBar from './search-bar/search-bar';
import MessageCreator from './message-creator/message-creator';

class Header extends React.Component {

  // constructor(props) {
  //   super(props);
  //   // this.props = props;
  //   // props.newMail;
  // }

  render() {
    return <header className="mail-page-header">
      <Menu/>
      <YandexServiceLogo/>
      <SearchBar/>
      <MessageCreator nmf={this.props.newMailFunction}/>
    </header>;
  }
}

export default Header;
