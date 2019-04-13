import React, { Component } from 'react';

import './contentHeaderMenu.css';
import { ContentHeaderMenuButton } from './contentHeaderMenuButton';

export class ContentHeaderMenu extends Component {
  render() {
    return (
      <div className="content-header-menu">
        <ContentHeaderMenuButton name="Переслать" />
        <ContentHeaderMenuButton name="Удалить" onClick={this.props.deleteLetters} />
        <ContentHeaderMenuButton name="Это спам!" />
        <ContentHeaderMenuButton name="Прочитано" />
      </div>
    );
  }
}
