import React from 'react';

import './hidden-message.css';

function HiddenMessage() {
  return  <div className="hidden-message">
    <div className="close-message" onClick="closeMessage()">&times;</div>

    <div className="hidden-message__content">

    </div>

  </div>;
}

export default HiddenMessage;
