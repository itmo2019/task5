import React from 'react';
import './MainBlock.css';
import { TopBar } from '../top-bar/TopBar';
import { Footer } from '../footer/Footer';
import { MessagesBox } from '../messages-box/MessagesBox';

export class MainBlock extends React.Component {
  render() {
    return (
      <div className="main-block page__main-block">
        <TopBar />
        <MessagesBox />
        <Footer />
      </div>
    );
  }
}
