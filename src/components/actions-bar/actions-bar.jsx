import React, { PureComponent } from 'react';

import './actions-bar.css';
import YaBigButton from '../ya-big-button';
import NavBar from '../nav-bar';

export class ActionsBar extends PureComponent {
  render() {
    const btnProps = { text: 'Написать' };
    return (
      <div id="actions-bar">
        <YaBigButton {...btnProps} {...this.props}/>
        <NavBar/>
      </div>
    );
  }
}

export default ActionsBar;
