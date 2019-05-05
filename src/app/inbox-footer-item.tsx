import * as React from 'react';

import '../blocks/inbox__footer-link.css';

export const InboxFooterLink = ({ name }: { name: string }) => {
  return (
    <button className="inbox__footer-link" type="button">
      {name}
    </button>
  );
};
