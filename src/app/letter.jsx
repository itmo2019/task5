import React from 'react';
import { Checkbox } from './checkbox';
import '../common.blocks/letter.css';
import '../common.blocks/letter__date.css';
import '../common.blocks/letter__preview.css';
import '../common.blocks/letter__read-box.css';
import '../common.blocks/letter__sender-icon.css';
import '../common.blocks/letter__sender-name.css';
import '../common.blocks/letter__single-letter.css';
import '../common.blocks/letter_unread.css';
import '../common.blocks/letter_added.css';
import '../common.blocks/letter_deleted.css';
import '../common.blocks/gray-text.css';
import '../common.blocks/single-line.css';
import '../common.blocks/essay-close__control-label.css';
import '../common.blocks/mail-link.css';
import '../common.blocks/clickable.css';

export const Letter = ({ id, data, unread, special, deleted, added, check }) => {
  const inner = (
    <div>
      <div className="letter__sender-icon">
        <span className="letter__single-letter">{data.letter}</span>
      </div>
      <p className="letter__sender-name single-line">{data.sender}</p>
      <div className="letter__read-box" />
      <p className="single-line letter__preview">{data.preview}</p>
      <div className="letter__date gray-text">
        <p className="single-line">{data.date}</p>
      </div>
    </div>
  );
  const deletedStyle = deleted ? 'letter_deleted' : '';
  const addedStyle = added && !deleted ? 'letter_added' : '';
  const unreadStyle = unread ? 'letter_unread' : '';

  const onClick = () => {
    check(id);
  };

  return (
    <div className={`letter ${addedStyle} ${deletedStyle} ${unreadStyle}`} id={id}>
      {special ? (
        <label className="essay-close__control-label clickable" htmlFor="open-task-1">
          <Checkbox check={onClick} checked={data.checked}/>
          {inner}
        </label>
      ) : (
        <div>
          <Checkbox check={onClick} checked={data.checked}/>
          <a className="mail-link" href="#">
            {inner}
          </a>
        </div>
      )}
    </div>
  );
};
