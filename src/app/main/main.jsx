import React, { Component } from 'react';

import './main.css';
import { Menu } from './menu';
import { Content } from './content';

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Menu />
        <Content />
      </main>
    );
  }
}
