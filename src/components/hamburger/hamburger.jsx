import React, { Component } from 'react';

import './hamburger.css';
import hamburger from './hamburger.svg';

export class Hamburger extends Component {
  render() {
    return (
      <button type="button" className="Hamburger">
        <img
          className="Hamburger__img"
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
