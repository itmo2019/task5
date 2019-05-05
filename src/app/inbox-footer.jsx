import React from 'react';
import '../blocks/inbox__footer.css';
import { InboxFooterLink } from './inbox-footer-item';

export const InboxFooter = () => {
  return (
    <footer className="inbox__footer">
      <InboxFooterLink name="© 2001—2018, Яндекс" />
      <InboxFooterLink name="Реклама" />
      <InboxFooterLink name="Помощь и обратная связь" />
    </footer>
  );
};
