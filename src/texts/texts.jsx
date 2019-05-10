import React,  { Component } from 'react';

import './texts.css';


export class Texts extends Component {
  render() {
      return (
        <div>
          <input type="checkbox" id={"show-letter" + this.props.letter.id} className="letters__show-action" 
          onChange={() => this.props.onOpenClick(this.props.letter.id, this.props.letter.textletter)} 
          />
          <label className="close" htmlFor={"show-letter"   + this.props.letter.id}>x</label>
          <div className="letters__text">{"От: " + this.props.letter.authtor}<br />{this.props.letter.textletter}</div>
        </div>
      );
    }
  
}
export default Texts;