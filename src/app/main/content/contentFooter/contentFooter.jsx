import React, { Component } from 'react';

import './contentFooter.css';
import { ContentFooterText } from './contentFooterText';

export class ContentFooter extends Component {
  render() {
    return (
      <div className="content-footer">
        <ContentFooterText text="&copy; 2001 - 2018, Яндекс" />
        <ContentFooterText text="Реклама" />
        <ContentFooterText text="Помощь и обратная связь" />
      </div>
    );
  }
}
