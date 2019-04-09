import React, { Component } from 'react';
import Toolbar from '../toolbar/toolbar';
import LetterDialog from '../letterDialog/letterDialog';
import LetterList from '../letterList/letterList';
import SupportLine from '../supportLine/supportLine';
import './letterBox.css';

function Hr() {
  return <hr className="letter-box__hr" />;
}

export default class LetterBox extends Component {
  static displayName = 'LetterBox';

  constructor(props) {
    super(props);
    this.state = {
      isMailVisible: false,
      mailContent: undefined,
      isCheckAll: false,
      handleAddMailButtonClick: undefined,
      handleRemoveButtonClick: undefined,
      handleUnmarkButtonClick: undefined,
      handleCheckAllClick: undefined
    };
  }

  handleMailExitClick = () => {
    this.setState({ isMailVisible: false });
  };

  handleLetterDialog = mailContent => {
    this.setState({ isMailVisible: true, mailContent });
  };

  setCheckAll = value => {
    this.setState({ isCheckAll: value });
  };

  updateHandleAddMailButtonClick = value => {
    this.setState({ handleAddMailButtonClick: value });
  };

  updateHandleRemoveButtonClick = value => {
    this.setState({ handleRemoveButtonClick: value });
  };

  updateHandleUnmarkButtonClick = value => {
    this.setState({ handleUnmarkButtonClick: value });
  };

  updateHandleCheckAllClick = value => {
    this.setState({ handleCheckAllClick: value });
  };

  render() {
    const {
      isMailVisible,
      mailContent,
      isCheckAll,
      handleAddMailButtonClick,
      handleRemoveButtonClick,
      handleUnmarkButtonClick,
      handleCheckAllClick
    } = this.state;
    return (
      <div className={`letter-box ${this.props.className}`}>
        <Toolbar
          isCheckAll={isCheckAll}
          setCheckAll={this.setCheckAll}
          handleAddMailButtonClick={handleAddMailButtonClick}
          handleRemoveButtonClick={handleRemoveButtonClick}
          handleUnmarkButtonClick={handleUnmarkButtonClick}
          handleCheckAllClick={handleCheckAllClick}
        />
        <Hr />
        <LetterDialog isMailVisible={isMailVisible} handleMailExitClick={this.handleMailExitClick}>
          {mailContent}
        </LetterDialog>
        <LetterList
          updateHandleAddMailButtonClick={this.updateHandleAddMailButtonClick}
          updateHandleRemoveButtonClick={this.updateHandleRemoveButtonClick}
          updateHandleUnmarkButtonClick={this.updateHandleUnmarkButtonClick}
          updateHandleCheckAllClick={this.updateHandleCheckAllClick}
          handleLetterDialog={this.handleLetterDialog}
          setCheckAll={this.setCheckAll}
        />
        <div className="letter-box__support-line">
          <Hr />
          <SupportLine />
        </div>
      </div>
    );
  }
}
