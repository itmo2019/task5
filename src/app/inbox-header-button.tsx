import * as React from 'react';
import '../blocks/inbox__header-button.css';

interface InboxHeaderButtonProps {
  action?: () => void;
  name: string
}

export const InboxHeaderButton = ({ action, name }: InboxHeaderButtonProps) => {
  return (
    <button className="inbox__header-button" type="button" onClick={action}>
      {name}
    </button>
  );
};
