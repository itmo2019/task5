import React, { Component } from 'react';

import './contentHeaderMenuButton.css';

export class ContentHeaderMenuButton extends Component {
  render() {
    return (
      <a href="#" className="content-header-menu-button__text-title content-header-menu-button__del-line" onClick={this.props.onClick}>
        {this.props.name}
      </a>
    );
  }
}
