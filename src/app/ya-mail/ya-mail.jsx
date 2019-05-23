import React, { Component } from 'react';

import './ya-mail.css';

import { ContentTopBar } from './content-top-bar/content-top-bar';
import { FooterContent } from './footer-content/footer-content';
import { ContentMessages } from './content-messages/content-messages';

export class YaMail extends Component {
  render() {
    return (
      <section className="page__ya-mail">
        <ContentTopBar
          deleteSelected={this.props.deleteSelected}
          selectAll={this.props.selectAll}
          allSelected={this.props.allSelected}
        />
        <ContentMessages
          messageList={this.props.messageList}
          selectCheckBox={this.props.selectCheckBox}
        />
        <FooterContent />
      </section>
    );
  }
}
