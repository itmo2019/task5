import React, { Component } from 'react';

import HeaderWrapper from '../header';
import BodyWrapper from '../body';
import LetterTemplate from '../template'

import './app.css';

export class App extends Component {
  render() {
    return (
      <div className="outer_wrapper">
        <HeaderWrapper/>
        <BodyWrapper/>
        <template id="letter_template">
      		<LetterTemplate/>
     	</template> 
      </div>
    );
  }
}
