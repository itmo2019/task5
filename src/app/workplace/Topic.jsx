import React, { Component } from 'react';

import './Topic.css';

export class Topic extends Component {
  render() {
    return (
      <div>
      <input type="checkbox" id={this.props.topic} className="workplace__open-topic" />
        <div className="topic workplace__topic">
          <label className="topic__close-topic" htmlFor={this.props.topic}>&#9747;</label>
          <pre>{this.props.message}</pre>
        </div>
      </div>
    );
  }
}
