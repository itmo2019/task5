import React from 'react';
import './linkBlock.css';

export default function LinkBlock(props) {
  return (
    <button className={`link-block ${props.className}`} type="button">
      {props.title}
    </button>
  );
}
