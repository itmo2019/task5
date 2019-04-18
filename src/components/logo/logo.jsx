import React, { Component } from 'react';
import { block } from 'bem-cn';

import './logo.css';
import logo from './logo.png';

const b = block('logo');

class Logo extends Component {
  render() {
    return <img className={b().toString()} alt="logo" src={logo} width="164px" />;
  }
}

export default Logo;
