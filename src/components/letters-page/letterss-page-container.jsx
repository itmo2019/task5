import React, { Component } from 'react';
import { LettersPageComponent } from './letters-page-component/letters-page-component';

export class LettersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: []
    };
  }
  render() {
    return (
      <LettersPageComponent />
    );
  }
}
