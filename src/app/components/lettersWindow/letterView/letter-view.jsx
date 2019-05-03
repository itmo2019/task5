import React from 'react';

import './letter-view.css';

import { Checkbox } from '../checkbox/checkbox';

export function LetterView(props) {
  return (
    <div
      className="letter-view"
      onClick={event =>
        event.target.querySelector('.letter-view__author') !== null
          ? props.showLetter(props.letter.info)
          : null
      }
      onKeyPress={null}
      role="button"
      aria-hidden
    >
      <Checkbox
        fooForSimple={props.clickOnSimpleCheckbox}
        id={props.letter.id}
        checked={props.letter.bCheckbox}
      />
      <div className="letter-view__photo" />
      <div className="letter-view__author">{props.letter.info.author}</div>
      <div className="letter-view__readed" />
      <div className="letter-view__theme">{props.letter.info.theme}</div>
      <div className="letter-view__content">{props.letter.info.content}</div>
      <div className="letter-view__data">
        <time dateTime="2019-03-01">3 мар</time>
      </div>
    </div>
  );
}
