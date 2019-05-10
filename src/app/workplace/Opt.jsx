import React, { Component } from 'react';

import './Opt.css';

export class Opt extends Component {

  onChangeHelper() {
    this.props.allLettersChosen((document.getElementsByClassName("all-letters__marker")[0]).checked);
  }

  render() {
    return (
      <div className="options workplace__options">
        <input type="checkbox" id={"select-all"} className="all-letters__marker" onChange={this.onChangeHelper.bind(this)}/>
        <a className="options__elem">Переслать</a>
        <a
          id="delete-button"
          className="options__elem"
          onClick={() => {
            (document.getElementsByClassName("all-letters__marker")[0]).checked = false;
            this.props.lettersDeleted();
          }}
        >
          Удалить
        </a>
        <a className="options__elem">Это спам!</a>
        <a className="options__elem">Прочитанно</a>
      </div>
    );
  }
}
