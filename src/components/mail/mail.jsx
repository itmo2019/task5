import React from 'react';
import MailHeader from '../mailHeader/mailHeader';
import MailMain from '../mailMain/mailMain';
import './mail.css';

export default function Mail() {
  return (
    <div className="mail">
      <MailHeader />
      <MailMain />
    </div>
  );
}
