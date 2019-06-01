import * as React from 'react';

import './app.css'
import { Top } from './components/top/top';
import { Main } from './components/main/main';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Top />
        <Main />
      </div>
    );
  }
}
