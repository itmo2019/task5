import React from 'react';
import '../blocks/inbox__header-button.css';

export const InboxHeaderButton = ({ action, name }) => {
  return (
    <button className="inbox__header-button" type="button" onClick={action}>
      {name}
    </button>
  );
};
