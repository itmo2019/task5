import React, { Component } from 'react';

import './contentHeaderMenuButton.css';

export class ContentHeaderMenuButton extends Component {
  render() {
    return (
      <div className="content-header-menu__button">
        <a href="#" className="content-header-menu__button_default-link" onClick={this.props.onClick}>
          {this.props.name}
        </a>
      </div>
    );
  }
}
