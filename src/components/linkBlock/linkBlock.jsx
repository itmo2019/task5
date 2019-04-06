import React from 'react';

import './linkBlock.css';

export default function LinkBlock(props) {
  return (
    <button className={`LinkBlock ${props.className}`} type="button">
      {props.title}
    </button>
  );
}
