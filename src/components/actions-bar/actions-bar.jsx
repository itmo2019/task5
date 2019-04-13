import React, { PureComponent } from 'react';

import './actions-bar.css';
import YaBigButton from '../ya-big-button';
import NavBar from '../nav-bar';

export class ActionsBar extends PureComponent {
  render() {
    return (
      <div id="actions-bar">
        <YaBigButton text="Написать" action={this.props.newMail} />
        <NavBar />
      </div>
    );
  }
}

export default ActionsBar;
