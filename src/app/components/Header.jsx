import React from 'react';
import './header.css';
import yandexLogo from './yandex_mail.png';

import PropTypes from 'prop-types';
import MainComponent from './MainComponent';

class Header extends React.Component {

  state = {
    value: ''
  };

  constructor(props) {
    super(props);
    //this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  };

  handleKey(event) {
    if (event.key === 'Enter') {
      this.props.filterMessages(this.state.value.trim());

    }
  }

  localDeleteFilter() {
    this.setState({
      value: ''
    });
    this.props.deleteFilter();
  }

  render() {
    return (
      <div className={'header'}>
        <div className={'header__three_dashes'}>
          <div className={'dash dash__first-dash'}></div>
          <div className={'dash dash__second-dash'}></div>
          <div className={'dash dash__third-dash'}></div>
        </div>
        <img src={yandexLogo} className={'header__logo'}/>
        <label className="header__search">
          <input
            className="search__input-text"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <input className="search__input-button" type="button"></input>
          <span className="search__cross" onClick={this.localDeleteFilter.bind(this)}> X </span>
        </label>
      </div>
    );
  }
}

Header.propTypes = {
  filterMessages: PropTypes.func.isRequired,
  deleteFilter: PropTypes.func.isRequired
};

export default Header;
