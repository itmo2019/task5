import React, { Component } from 'react';

import './app.css';

import Main from './main';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { inputActive: false };
  }

  showLetters = () => {
    this.setState({ inputActive: true });
  };

  clickHandlerLetter = () => {
    this.setState({ inputActive: false });
  }

  render() {
    return (
      <div className="content">
        <div className="menu">
          <div className="menu__button_write">Написать</div>
          <div className="options">
            <div className="option" onClick={this.showLetters}>
              <div className="text option__input">Входящие</div>
            </div>
            <div className="option">
              <div className="text option__sended">Отправленные</div>
            </div>
            <div className="option">
              <div className="text option__removed">Удалённые</div>
            </div>
            <div className="option options__spam">Спам</div>
            <div className="option options__">Черновики</div>
            <div className="option options__createdir">Создать папку</div>
          </div>
        </div>
        <Main inputActive={this.state.inputActive} onClickLetter={() => this.clickHandlerLetter()} />
      </div>
    );
  }
}

export default Content;
