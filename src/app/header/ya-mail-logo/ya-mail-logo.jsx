import React from 'react';

import './ya-mail-logo.css';

import MailLogo from '../../../images/ya-mail-logo.png';

function YaMailLogo() {
  return (
    <a href="/">
      <img src={MailLogo} alt="" className="page__ya-mail-logo" width="153" height="31" />
    </a>
  );
}

export default YaMailLogo;
