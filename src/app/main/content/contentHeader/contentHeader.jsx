import React, { Component } from 'react';

import './contentHeader.css';
import { ContentHeaderMenu } from './contentHeaderMenu';
import { selectAll } from '../../../../js/script';

export class ContentHeader extends Component {
  render() {
    return (
      <div className="content-header">
        <input className="content-header__checkbox" type="checkbox" onClick={selectAll} />
        <ContentHeaderMenu />
      </div>
    );
  }
}
