import React, { Component } from 'react';
import { block } from 'bem-cn';

import './hamburger.css';
import hamburger from './hamburger.svg';

const b = block('hamburger');

class Hamburger extends Component {
  render() {
    return (
      <button type="button" className={b().toString()}>
        <img
          alt="hamburger icon"
          src={hamburger}
          width="25px"
          height="25px"
        />
      </button>
    );
  }
}

export default Hamburger;
