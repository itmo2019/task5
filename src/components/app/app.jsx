import React from 'react';

import MailHeader from '../header/header';
import AppContent from '../appContent/appContent';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MailHeader />
        <AppContent />
      </div>
    );
  }
}

export default App;
