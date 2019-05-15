import React from 'react';
import './linkBlock.css';

export default function LinkBlock(props) {
  const { className, title, onClick } = props;

  return (
    <button className={`link-block ${className}`} type="button" onClick={onClick}>
      {title}
    </button>
  );
}
