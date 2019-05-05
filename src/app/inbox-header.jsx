import React from 'react';

import '../blocks/inbox__header.css';
import '../blocks/inbox__header-checkbox.css';
import { InboxHeaderButton } from './inbox-header-button';

export const InboxHeader = ({ toggleAll, deleteSelected, allSelected }) => {
  return (
    <div className="inbox__header">
      <input
        className="inbox__header-checkbox"
        type="checkbox"
        checked={allSelected}
        onChange={toggleAll}
      />
      <InboxHeaderButton name="Переслать" />
      <InboxHeaderButton name="Удалить" action={deleteSelected} />
      <InboxHeaderButton name="Это спам!" action={deleteSelected} />
      <InboxHeaderButton name="Прочитано" />
    </div>
  );
};
