import React, { Component } from 'react';

import './left-menu.css';
import { MenuButtons } from './menuButtons';
import { NewLetterButton } from './newLetterButton';

export class Menu extends Component {
  render() {
    return (
      <div className="left-menu">
        <NewLetterButton onClick={this.props.newLetterButtonOnClick}/>
        <MenuButtons />
      </div>
    );
  }
}
