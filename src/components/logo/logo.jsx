import React, { Component } from 'react';

import './logo.css';
import logo from './logo.png';

class Logo extends Component {
  render() {
    return (
        <img className="Logo" alt="logo" src={logo} width="164px" />
    );
  }
}

export default Logo;
