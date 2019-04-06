import React from 'react';

import MailHeader from '../mailHeader/mailHeader';
import MailMain from '../mailMain/mailMain';

import './mail.css';

export default function Mail() {
  return (
    <div className="Mail">
      <MailHeader />
      <MailMain />
    </div>
  );
}
