import React, { Component } from 'react';
import Mails from "./mails";
import LetterContent from "./letterContent";

import './app.css';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLetterOpened: false,
      letterSender: "",
      letterStartOfText: "",
      allLettersChosen: false
    };
  }

  render() {
    return (
      <main>
        <nav className="menu">
          <button className="write">Написать</button>
          <ul className="folders">
            <li className="folders__folder folders__folder--chosen">Входящие</li>
            <li className="folders__folder">Отправленные</li>
            <li className="folders__folder">Удалённые</li>
            <li className="folders__folder">Спам</li>
            <li className="folders__folder">Черновики</li>
            <li className="folders__folder">Создать папку</li>
          </ul>
        </nav>
        <div className="mail_body">
          <ul className="options">
            <button className={"checkmark options__checkmark checkmark--" + (this.state.allLettersChosen ? "chosen" : "unchosen")}
                    id="choose_all" onClick={ () => {
              this.mailRef.choseAllLetters();
              this.setState({
                allLettersChosen: true,
              });
            }
            }/>
            <li className="options__action" onClick={
              () => this.mailRef.addRandomLetter()
            }>Переслать</li>
            <li className="options__action" id="remove" onClick={
              () => this.mailRef.deleteChosenLetters()
            }>Удалить</li>
            <li className="options__action">Это спам</li>
            <li className="options__action">Прочитано</li>
          </ul>
          {
            this.state.isLetterOpened ?
              <LetterContent
                onClose={() => this.setState({ isLetterOpened: false })}
                letterSender={this.state.letterSender}
                letterStartOfText={this.state.letterStartOfText}
              /> : ""
          }
          <Mails
            hideMails={this.state.isLetterOpened}
            onLetterOpened={(sender, startOfText) => this.setState({letterSender: sender, letterStartOfText: startOfText, isLetterOpened: true})}
            letters={this.state.letters}
            mCheckboxClicked={idx => this.mCheckboxClicked(idx)}
            mailRef={ mailRef => {this.mailRef = mailRef}}
          />
          <footer className="footer">
            <ul className="help">
              <li className="help__item">
                <a href="#">Помощь и обратная связь</a>
              </li>
              <li className="help__item">
                <a href="#">Реклама</a>
              </li>
              <li className="help__item">
                <a href="#">© 2001—2018, Яндекс</a>
              </li>
            </ul>
          </footer>
        </div>
      </main>
    );
  }
}

export default Main;
