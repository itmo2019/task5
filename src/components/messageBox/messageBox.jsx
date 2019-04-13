import React from 'react';
import MessageBoxList from '../messageBoxList'
import MessageBoxSeparator from '../messageBoxSeparator'
import MessageBoxHeader from '../messageBoxHeader'
import MessageBoxFooter from '../messageBoxFooter'
import './messageBox.css';
function MessageBox() {
  return (
    <div className= "message-box">
      <MessageBoxHeader />
      <MessageBoxList />
      <MessageBoxSeparator />
      <MessageBoxFooter />
    </div>
  );
}

export default MessageBox;
