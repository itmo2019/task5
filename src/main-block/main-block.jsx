import React from 'react';

import './main-block.css';
import LeftMenu from './left-menu/left-menu';
import MessagesBlock from './messages-block/messages-block';

function MainBlock() {
  return  <div className="mail-page__main-block">
    <LeftMenu />
    <MessagesBlock />
  </div>;
}

export default MainBlock;
