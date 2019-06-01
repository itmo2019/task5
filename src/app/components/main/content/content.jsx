import * as React from 'react';
import './content.css';
import { Actions } from './actions/actions';
import { Footer } from './footer/footer';
import { LetterBoxAndEntryBoard } from './letter-box/letterBoxAndEntryBoard';

export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Actions
          remove={this.props.remove}
          checkAll={this.props.checkAll}
        />
        <LetterBoxAndEntryBoard
          letters={this.props.letters}
          check={this.props.check}
        />
        <Footer />
      </div>
    );
  }
}
