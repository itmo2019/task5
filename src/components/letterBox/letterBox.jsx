import React from 'react';

import Checkbox from '../checkbox/checkbox';
import './letterBox.css';
import LettersHolder from '../lettersHolder/lettersHolder';

class LetterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeLetter: () => {},
      selectAll: () => {},
      handleMailClick: () => {}
    };
  }

  updateRemoveLetter = value => {
    this.setState({ removeLetter: value });
  };

  updateSelectAll = value => {
    this.setState({ selectAll: value });
  };

  updateHandleMailClick = value => {
    this.setState({ handleMailClick: value });
  };

  render() {
    return (
      <div className="LetterBox">
        <ul className="Toolbar">
          <li className="Toolbar__Item_first">
            <Checkbox onclick={this.state.selectAll} />
          </li>
          <li className="Toolbar__Item">
            <input
              className="Toolbar__Button"
              type="button"
              id="forward-letter"
              value="Переслать"
            />
          </li>
          <li className="Toolbar__Item">
            <input
              className="Toolbar__Button"
              type="button"
              id="remove-letter"
              value="Удалить"
              onClick={this.state.removeLetter}
            />
          </li>
          <li className="Toolbar__Item">
            <input className="Toolbar__Button" type="button" id="spam-letter" value="Это спам!" />
          </li>
          <li className="Toolbar__Item">
            <input
              className="Toolbar__Button"
              type="button"
              id="mark-read-letter"
              value="Прочитано"
            />
          </li>
        </ul>

        <LettersHolder
          updateHandleMailClick={this.updateHandleMailClick}
          updateAddLetter={this.props.updateAddLetter}
          updateRemoveLetter={this.updateRemoveLetter}
          updateSelectAll={this.updateSelectAll}
          handleMailClick={this.state.handleMailClick}
        />
        <div className="LetterBox__SupportLine">
          <hr className="LetterBox__Hr" />
          <div className="SupportLine">
            <div className="SupportLine__Item">Помощь и обратная связь</div>
            <div className="SupportLine__Item">Реклама</div>
            <div className="SupportLine__Item">© 2001 - 2019, Яндекс</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LetterBox;
