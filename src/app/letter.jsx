import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../blocks/letter__date.css';
import '../blocks/letter__author.css';
import '../blocks/letter__avatar.css';
import '../blocks/letter__checkbox.css';
import '../blocks/letter__special-letter.css';
import '../blocks/letter__title.css';
import '../blocks/letter__icon.css';
import '../blocks/letter__unread-indicator.css';
import '../blocks/letter.css';

import avatar from '../avatar.JPG';

export const Letter = ({ letter, toggleLetter }) => {
  const [inProp, setIn] = useState(false);
  useEffect(() => {
    if (letter.new) {
      setTimeout(() => setIn(true), 1);
    }
  }, []);
  const { icon } = letter;
  const indicatorClassList = ['letter__unread-indicator'];
  const liClassList = ['letter'];
  if (letter.unread) {
    indicatorClassList.push('letter__unread-indicator_active');
    liClassList.push('letter_unread');
  } else {
    indicatorClassList.push('letter__unread-indicator_inactive');
  }
  if (letter.new) {
    liClassList.push('letter__new');
  }
  let iconJSX;
  if (icon) {
    const color = letter.color ? letter.color : '#ff3333';
    iconJSX = (
      <div className="letter__icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
    );
  } else if (letter.avatar) {
    iconJSX = (
      <div className="letter__icon">
        <img alt="avatar" className="letter__avatar" src={avatar} />
      </div>
    );
  }
  const toggleThisLetter = () => toggleLetter(letter.key);

  const innerJsx = (
    <div>
      <input
        className="letter__checkbox"
        type="checkbox"
        onChange={toggleThisLetter}
        checked={letter.selected ? letter.selected : false}
      />
      {iconJSX}
      <div className="letter__author">{letter.author}</div>
      <div className={indicatorClassList.join(' ')} />
      <div className="letter__title">{letter.title}</div>
      <div className="letter__date">{letter.date}</div>
    </div>
  );

  let letterJSX;
  if (letter.special) {
    letterJSX = (
      <li className={liClassList.join(' ')} key={letter.key}>
        <label className="letter__special-letter" htmlFor="show">
          {innerJsx}
        </label>
      </li>
    );
  } else {
    letterJSX = (
      <li className={liClassList.join(' ')} key={letter.key}>
        {innerJsx}
      </li>
    );
  }

  return (
    <CSSTransition
      in={(inProp || !letter.new) && !letter.deleted}
      classNames="letter"
      timeout={{ enter: 2000, exit: 500 }}
    >
      {letterJSX}
    </CSSTransition>
  );
};
