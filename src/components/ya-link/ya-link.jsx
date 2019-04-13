import React from 'react';

import './ya-link.css';

function YaLink({ text, id, click }) {
  return (
    <a id={id} className="ya-link" href="#" onClick={click}>
      {text}
    </a>
  );
}

export default YaLink;
