import * as React from 'react';
import './strips.css';

export class Strips extends React.Component {
  render() {
    return (
      <div className="strips" >
        <div className="strips__strip" />
        <div className="strips__strip" />
        <div className="strips__strip" />
      </div>
    );
  }
}
