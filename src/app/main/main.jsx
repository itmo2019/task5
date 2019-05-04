import React from 'react';

import Inner from './inner';
import LeftPanel from './left-panel';

import './main.css';

export default function Main() {
  return (
    <main className="main">
      <LeftPanel />
      <Inner />
    </main>
  );
}
