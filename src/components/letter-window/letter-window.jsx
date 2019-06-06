import React, { useContext } from 'react';
import classNames from 'classnames';
import { mem } from '../../react-utils';

import { LettersContext } from '../letters-context';
import { Text } from '../text';
import { ProfileImage } from '../profile-image';
import { Date } from '../date';

import style from './letter-window.module.css';

export const LetterWindow = ({ className, id }) => {
  if (!Number.isInteger(+id)) {
    return null;
  }

  const { getLetterByID } = useContext(LettersContext);
  const letter = mem(() => getLetterByID(parseInt(id, 10))).deps(getLetterByID);

  return (
    <div className={classNames(className, style.content)}>
      <header className={style.header}>
        <Text className={style.subject} withOverflow>
          {letter.content.content.subject}
        </Text>
        <div className={style.messageInfo}>
          <ProfileImage className={style.profileImage} {...letter.content.user} />
          <Text className={style.name} withOverflow>
            {letter.content.user.name}
          </Text>
          <Date date={letter.content.date} className={style.date} />
        </div>
      </header>
      <main className={style.body}>{letter.content.content.body}</main>
    </div>
  );
};
