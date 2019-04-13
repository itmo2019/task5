import React, { Component } from 'react';

import './contentHeader.css';
import { ContentHeaderMenu } from './contentHeaderMenu';

export class ContentHeader extends Component {
  render() {
    return (
      <div className="content-header">
        <input
          className="content-header__checkbox"
          type="checkbox"
          checked={this.props.isAllChecked}
          onChange={this.props.selectAll}
        />
        <ContentHeaderMenu deleteLetters={this.props.deleteLetters} />
      </div>
    );
  }
}
