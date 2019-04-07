import React from 'react';
import LetterDialog from '../letterDialog/letterDialog';
import LettersList from '../lettersList/lettersList';

import './lettersHolder.css';

class LettersHolder extends React.Component {
  render() {
    return (
      <>
        <hr className="LettersHolder__Hr" />
        <LetterDialog updateHandleMailClick={this.props.updateHandleMailClick} />
        <LettersList
          updateAddLetter={this.props.updateAddLetter}
          updateRemoveLetter={this.props.updateRemoveLetter}
          updateSelectAll={this.props.updateSelectAll}
          handleMailClick={this.props.handleMailClick}
        />
      </>
    );
  }
}

export default LettersHolder;
