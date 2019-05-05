import * as React from 'react';

import '../blocks/main.css';
import '../blocks/main__inbox-container.css';
import { Inbox, InboxProps } from './inbox';
import { Finder } from './finder';

export const Main = ({ ...props }: InboxProps) => {
  return (
    <div className="main">
      <Finder />
      <div className="main__inbox-container">
        <Inbox {...props} />
      </div>
    </div>
  );
};
