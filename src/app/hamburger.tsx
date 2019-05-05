import React from 'react';
import '../blocks/hamburger.css';
import '../blocks/hamburger__slice.css';

export const Hamburger = () => {
  return (
    <div className="hamburger">
      <div className="hamburger__slice" />
      <div className="hamburger__slice" />
      <div className="hamburger__slice" />
    </div>
  );
};
