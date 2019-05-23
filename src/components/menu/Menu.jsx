import React, { Component } from 'react';

import './Menu.css';

import { ButtonsList } from './buttons-list';

export class Menu extends Component {
  render() {
    return (
      <div className="menu app__menu">
        <ButtonsList />
      </div>
    );
  }
}
