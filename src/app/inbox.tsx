import * as React from 'react';

import '../blocks/inbox.css';
import '../blocks/inbox__wrapper.css';
import '../index.css';
import { InboxFooter } from './inbox-footer';
import { InboxHeader } from './inbox-header';
import { MailList } from './mail-list';
import { ILetter } from './app'
import { Story } from './story';

export interface InboxProps {
  letters: ILetter[];
  deleteSelected: () => void;
  toggleAll: () => void;
  toggleLetter: (id: number) => void;
  allSelected: boolean
}

export const Inbox = ({ letters, deleteSelected, toggleAll, toggleLetter, allSelected }: InboxProps) => {
  return (
    <div className="inbox">
      <InboxHeader
        deleteSelected={deleteSelected}
        toggleAll={toggleAll}
        allSelected={allSelected}
      />
      <input className="inbox__show-story-checkbox" id="show" type="checkbox" />
      <Story />
      <div className="inbox__wrapper">
        <MailList letters={letters} toggleLetter={toggleLetter} />
      </div>
      <InboxFooter />
    </div>
  );
};
