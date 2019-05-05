import React from 'react';

import '../blocks/finder.css';
import '../blocks/finder__input.css';
import '../blocks/finder__button-close.css';

export const Finder = () => {
  return (
    <div className="finder">
      <input className="finder__input" placeholder="Поиск" type="text" />
      <button className="finder__button-close" type="button">
        &times;
      </button>
    </div>
  );
};
