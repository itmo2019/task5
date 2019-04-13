import React from 'react';

import Header from '../header';

import './app.css';
import MainContainer from '../main-container';

function App() {
  return (
    <div className="main-layout">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
