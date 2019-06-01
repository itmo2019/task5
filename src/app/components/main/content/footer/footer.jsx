import * as React from 'react';
import './footer.css';
import { Info } from './info/info';

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Info />
      </div>
    );
  }
}
