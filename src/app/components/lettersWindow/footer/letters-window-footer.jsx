import React from 'react';

import './letters-window-footer.css';

export function LettersWindowFooter() {
  return (
    <footer className="letters-window__footer">
      <a
        className="letters-window__footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/adv/"
      >
        Помощь и обратная связь
      </a>
      <a
        className="letters-window__footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/support/mail/"
      >
        Реклама
      </a>
      <a
        className="letters-window__footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://yandex.ru/"
      >
        &copy; 2001 - 2018, Яндекс
      </a>
    </footer>
  );
}
