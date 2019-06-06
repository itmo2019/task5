import React from 'react';
import classNames from 'classnames';
import { pure } from 'recompose';
import { initials, randomColor } from '../../utils';

import styles from './profile-image.module.css';

export const ProfileImage = pure(({ className, imageUrl, name }) => {
  return imageUrl ? (
    <WithImage className={className} imageUrl={imageUrl} />
  ) : (
    <WithInitials className={className} name={name} />
  );
});

const ProfileImageComponent = pure(({ className, style, text }) => (
  <div className={classNames(className, styles.profileImage)} style={style}>
    {text}
  </div>
));

const WithInitials = pure(({ className, name }) => (
  <ProfileImageComponent
    className={className}
    style={{ backgroundColor: `rgb(${randomColor().join(',')})` }}
    text={initials(name)}
  />
));

const WithImage = pure(({ className, imageUrl }) => (
  <ProfileImageComponent className={className} style={{ backgroundImage: `url(${imageUrl})` }} />
));
