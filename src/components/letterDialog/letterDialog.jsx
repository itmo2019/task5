import React from 'react';
import './letterDialog.css';

export default function LetterDialog(props) {
  const { isMailVisible, handleMailExitClick, children } = props;
  return (
    <section className={`letter-dialog ${isMailVisible ? 'letter-dialog_visible' : ''}`}>
      <div className="letter-dialog__exit" onClick={handleMailExitClick}>
        ×
      </div>
      <div className="letter-dialog__content">{children}</div>
    </section>
  );
}
