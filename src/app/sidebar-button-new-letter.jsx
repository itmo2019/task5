import React, { Component } from 'react';
import '../common.blocks/sidebar__button-new-letter.css';

export class SidebarButtonNewLetter extends Component {
  render() {
    return (
      <button
        className="sidebar__button-new-letter clickable"
        onClick={this.props.action}
        type="button"
      >
        Написать
      </button>
    );
  }
}
