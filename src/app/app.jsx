import React, { Component } from 'react';
import Header from './components/Header';
import './app.css';
import MainComponent from './components/MainComponent';
import json from './../letter';
import _ from 'lodash';

export class App extends Component {

  state = {
    n: 4,
    k: 4,
    letterMap: new Map(),
    lettersGlobal: [],
    messages: []
  };


  sender = (letters) => {
    let r = Math.floor(Math.random() * 590 + 10);
    console.log(r + ' ' + this.state.n);
    this.setState({ n: this.state.n + 1 });
    this.setState({ k: this.state.k + 1 });
    this.addMessage(json);
    setTimeout(this.sender.bind(this), 10000);

  };

  addMessageToState = (id, author, theme, text, date) => {
    this.setState({ messages: [...this.state.messages, [id, author, theme, text, date ]]});
  };

  addMessage = () => {
    let letterNum = Math.floor(Math.random() * 29);
    this.addMessageToState(this.state.k - 1, 'Фридрих Ницше', 'Глава ' + (letterNum + 1), json[letterNum], '6 авг');
    this.state.letterMap.set("" + this.state.k, );
  };

  componentDidMount() {
    console.log('hello');
    this.state.lettersGlobal = json;

    this.state.letterMap.set('1', 1);
    this.state.letterMap.set('2', 2);
    this.state.letterMap.set('3', 3);
    this.state.letterMap.set('4', 4);
    this.sender(json);
  }

  render() {

    return (
      <body className={'mail_body'}>
      <Header/>
      <MainComponent messages={this.state.messages}/>
      </body>

    );
  }
}

/*
const app = {
  backgroundColor: '#e5eaf0',
  paddingTop: '12px',
  paddingLeft: '22px',
  paddingRight: '0',
  fontFamily: 'YandexRegular, sans-serif'
};
*/

/*
<header className="app-header">
          <p>
            Edit <code>src/app/app.jsx</code> and save to reload.
          </p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
 */
