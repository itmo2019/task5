import React from 'react';

import '../blocks/main.css';
import '../blocks/main__inbox-container.css';
import { Inbox } from './inbox';
import { Finder } from './finder';

export const Main = ({ ...props }) => {
  return (
    <div className="main">
      <Finder />
      <div className="main__inbox-container">
        <Inbox {...props} />
      </div>
    </div>
  );
};
