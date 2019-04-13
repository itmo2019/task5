import React from 'react';
import LeftMenu from '../leftMenu';
import MessageBox from '../messageBox';
import './main.css';
function Main() {
  return (
    <div className= "main-window">
      <LeftMenu />
      <MessageBox />
    </div>
  );
}

export default Main;
