import React, { Component } from 'react';

import './app.css';
import { Menu } from './menu/Menu';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Workplace  } from './workplace/Workplace';


export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
        <Workplace />
        <Footer />
      </div>
    );
  }
}
