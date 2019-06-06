import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { pure } from 'recompose';
import { Checkbox } from '../checkbox';
import { ProfileImage } from '../profile-image';
import { Date } from '../date';
import { UnreadFlag } from './unread-flag';
import { Link } from '../link';
import { Text } from '../text';
import { LettersContext } from '../letters-context';

import styles from './letter.module.css';

const cx = classNames.bind(styles);

export const Letter = pure(({ id, unread, checked, content }) => {
  const { changeLetterByID } = useContext(LettersContext);

  const handleChange = event => {
    const targetChecked = event.target.checked;
    if (checked !== targetChecked) {
      changeLetterByID(id, () => ({ checked: targetChecked }));
    }
  };

  const handleClick = () => {
    changeLetterByID(id, () => ({ unread: false }));
  };

  return (
    <Link
      className={cx({ link: true, letterActive: checked })}
      href={`/message/${id}`}
      onClick={handleClick}
    >
      <div className={cx(styles.letter)}>
        <Checkbox handleChange={handleChange} checked={checked} id={`msg-checkbox-${id}`} />
        <ProfileImage {...content.user} />
        <Text className={cx({ text: true, textUnread: unread })} withOverflow>
          {content.user.name}
        </Text>
        <UnreadFlag visible={unread} />
        <Text className={cx({ text: true, textUnread: unread })} withOverflow>
          {content.content.subject}
        </Text>
        <Date date={content.date} className={styles.date} />
      </div>
    </Link>
  );
});
