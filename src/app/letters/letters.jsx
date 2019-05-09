import React, { Component } from 'react';

import './letters.css';
import '../page/page.css';
import { LetterHead } from '../letterHead/letterHead';

export class Letters extends Component {
  render() {
    return (
      <ul className="letters" style={{ display: this.props.display ? 'inline-block' : 'none' }}>
        {this.props.letters.map(a => {
          if (a.isVisible) {
            return (
              <LetterHead
                id={a.id}
                key={a.id}
                authorName={a.authorName}
                authorImage={a.authorImage}
                text={a.letterText}
                headText={a.headText}
                isVisible={a.isVisible}
                isChecked={this.props.checked[a.id]}
                checkboxChange={this.props.checkboxChange}
                setText={this.props.setText}
                addAnimation={a.addAnimation}
                removeAddAnimation={this.props.removeAddAnimation}
                deleteAnimation={a.deleteAnimation}
                makeDelete={this.props.makeDelete}
                unread={a.isRead}
                setRead={this.props.setRead}
                showLetter={this.props.showLetter}
                headDate={a.headDate}
                headTagDate={a.headTagDate}
              />
            );
          }
        })}
      </ul>
    );
  }
}
