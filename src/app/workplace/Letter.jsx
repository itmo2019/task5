import React, { Component } from 'react';

import './Letter.css';

export class Letter extends Component {
  render() {
    window.setTimeout(
      function() {
        if(document.getElementById("letter" + this.props.id) == null)
          console.log(this.props)
        else
          document.getElementById("letter" + this.props.id).className = ("new-letter " + this.props.animat);
      }.bind(this), 300);

    return (
      <div className="new-letter" id={"letter" + this.props.id}>
        <label className="list-of-letters__label" htmlFor={this.props.topic}>
          <div className="unread-letter list-of-letters__unread-letter">
            <input type="checkbox" id={"input" + this.props.id} className="unread-letter__marker"
              onChange={() => this.props.letterChosen(this.props.id)} checked={this.props.chosen}/>
            <div className="unread-letter__sender">{this.props.author}</div>
            <div className="unread-letter__read-marker" />
            <div className="unread-letter__title">{this.props.title}</div>
            <p className="unread-letter__date">{this.props.data}</p>
          </div>

        </label>
      </div>
    );
  }
}
