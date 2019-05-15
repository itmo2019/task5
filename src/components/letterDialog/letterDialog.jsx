import React from 'react';
import './letterDialog.css';

export default function LetterDialog(props) {
  const { isVisible, onExitClick, children } = props;

  return (
    <section className={`letter-dialog ${isVisible ? 'letter-dialog_visible' : ''}`}>
      <div className="letter-dialog__exit" onClick={onExitClick}>
        ×
      </div>
      <div className="letter-dialog__content">{children}</div>
    </section>
  );
}
