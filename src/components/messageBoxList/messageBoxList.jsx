import React from 'react';
import './messageBoxList.css';

function MessageBox() {
  return (
    <div className="message-box__list-wrap">
      <div className="special-kitten">
        <div className="kitten-page">
          <div className="close-page">X</div>
          <div className="manul-text" />
        </div>
      </div>
      <ul className="message-box__list" />
    </div>
  );
}

export default MessageBox;
