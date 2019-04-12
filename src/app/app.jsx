import React, { Component } from 'react';

import HeaderWrapper from '../header';
import BodyWrapper from '../body';

import './app.css';

export class App extends Component {
  render() {
    return (
      <div className="outer_wrapper">
        <HeaderWrapper/>
        <BodyWrapper/>
      </div>
    );
  }
}
