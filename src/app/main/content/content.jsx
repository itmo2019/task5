import React, { Component } from 'react';

import './content.css';
import { ContentHeaderMenu } from './contentHeaderMenu';
import { MainContent } from './mainContent';
import { ContentFooter } from './contentFooter';

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <ContentHeaderMenu
          isAllChecked={this.props.isAllChecked}
          selectAll={this.props.selectAll}
          deleteLetters={this.props.deleteLetters}
        />
        <MainContent
          letters={this.props.letters}
          changeCheckbox={this.props.changeCheckbox}
          checkedLetterIds={this.props.checkedLetterIds}
          removeAnimation={this.props.removeAnimation}
          deleteLetter={this.props.deleteLetter}
        />
        <ContentFooter />
      </div>
    );
  }
}
