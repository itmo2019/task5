import React, { Component } from 'react';

import './app.css';
import Letters from './letters';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="actions">
          <input type="checkbox" className="checkbox actions__checkbox" />
          <div className="action">
            <div className="text action__replace">Переслать</div>
          </div>
          <div className="action">
            <div className="text action__remove" onClick="deleteLetters()">Удалить</div>
          </div>
          <div className="action">
            <div className="text action__spam">Это спам!</div>
          </div>
          <div className="action">
            <div className="text action__readed">Прочитано</div>
          </div>
        </div>
        <Letters inputActive={this.props.inputActive} onClickLetter={this.props.onClickLetter} />
        <div className="footer">
          <div className="link footer__link1">&copy; 2001-2018, Яндекс</div>
          <div className="link footer__link2">Реклама</div>
          <div className="link footer__link3">Помощь и обратная связь</div>
        </div>
      </div>
    );
  }
}

export default Main;
