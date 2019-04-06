import React, { Component } from 'react';

import Toolbar from '../toolbar/toolbar';
import LetterDialog from '../letterDialog/letterDialog';
import LetterList from '../letterList/letterList';
import SupportLine from '../supportLine/supportLine';

import './letterBox.css';

function Hr() {
  return <hr className="LetterBox__Hr" />;
}

export default class LetterBox extends Component {
  static displayName = 'LetterBox';

  constructor(props) {
    super(props);
    this.state = {
      addLetter: undefined,
      removeLetter: undefined,
      unmarkLetter: undefined,
      selectAll: undefined,
      handleMailClick: undefined
    };
  }

  updateAddLetter = value => {
    this.setState({ addLetter: value });
  };

  updateRemoveLetter = value => {
    this.setState({ removeLetter: value });
  };

  updateUnmarkLetter = value => {
    this.setState({ unmarkLetter: value });
  };

  updateSelectAll = value => {
    this.setState({ selectAll: value });
  };

  updateHandleMailClick = value => {
    this.setState({ handleMailClick: value });
  };

  render() {
    return (
      <div className={`LetterBox ${this.props.className}`}>
        <Toolbar
          addLetter={this.state.addLetter}
          removeLetter={this.state.removeLetter}
          unmarkLetter={this.state.unmarkLetter}
          selectAll={this.state.selectAll}
        />
        <Hr />
        <LetterDialog updateHandleMailClick={this.updateHandleMailClick} />
        <LetterList
          updateAddLetter={this.updateAddLetter}
          updateRemoveLetter={this.updateRemoveLetter}
          updateUnmarkLetter={this.updateUnmarkLetter}
          updateSelectAll={this.updateSelectAll}
          handleMailClick={this.state.handleMailClick}
        />
        <div className="LetterBox__SupportLine">
          <Hr />
          <SupportLine />
        </div>
      </div>
    );
  }
}
