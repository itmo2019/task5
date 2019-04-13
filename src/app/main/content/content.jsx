import React, { Component } from 'react';

import './content.css';
import { ContentHeader } from './contentHeader';
import { MainContent } from './mainContent';
import { ContentFooter } from './contentFooter';

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <ContentHeader
          isAllChecked={this.props.isAllChecked}
          selectAll={this.props.selectAll}
          deleteLetters={this.props.deleteLetters}
        />
        <MainContent
          letters={this.props.letters}
          checkedLetterIds={this.props.checkedLetterIds}
          onCheckboxChange={this.props.onCheckboxChange}
        />
        <ContentFooter />
      </div>
    );
  }
}
