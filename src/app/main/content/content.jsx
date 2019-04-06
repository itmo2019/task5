import React, { Component } from 'react';

import './content.css';
import { ContentHeader } from './contentHeader';
import { MainContent } from './mainContent';
import { ContentFooter } from './contentFooter';

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <ContentHeader />
        <MainContent />
        <ContentFooter />
      </div>
    );
  }
}
