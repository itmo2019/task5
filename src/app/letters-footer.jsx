import React from 'react';
import '../common.blocks/letters__footer.css';
import '../common.blocks/letters__footer-item.css';
import '../common.blocks/letters__footer-link.css';
import '../common.blocks/gray-text.css';
import '../common.blocks/single-line.css';

export const LettersFooter = () => {
  return (
    <footer className="letters__footer gray-text">
      <LettersFooterItem name="© 2001-2018, Яндекс"/>
      <LettersFooterItem name="Реклама"/>
      <LettersFooterItem name="Помощь и обратная связь"/>
    </footer>
  );
};

const LettersFooterItem = ({ name }) => {
  return (
    <div className="letters__footer-item">
      <p>
        <a className="single-line letters__footer-link mail-link" href="#">
          {name}
        </a>
      </p>
    </div>
  );
};
