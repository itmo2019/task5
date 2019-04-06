import React from 'react';

import Inner from './inner';
import LeftPanel from './left-panel';

import './main.css';

function Main() {
  return(
    <main className="main">
      <LeftPanel />
      <Inner />
    </main>
  )
}

export default Main;
