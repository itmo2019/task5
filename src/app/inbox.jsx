import React from 'react';

import '../blocks/inbox.css';
import '../blocks/inbox__wrapper.css';
import '../index.css';
import { InboxFooter } from './inbox-footer';
import { InboxHeader } from './inbox-header';
import { MailList } from './mail-list';

export const Inbox = ({ letters, deleteSelected, toggleAll, toggleLetter, allSelected }) => {
  return (
    <div className="inbox">
      <InboxHeader
        deleteSelected={deleteSelected}
        toggleAll={toggleAll}
        allSelected={allSelected}
      />
      <input className="inbox__show-story-checkbox" id="show" type="checkbox" />
      <div className="inbox__wrapper">
        <MailList letters={letters} toggleLetter={toggleLetter} />
      </div>
      <InboxFooter />
    </div>
  );
};
