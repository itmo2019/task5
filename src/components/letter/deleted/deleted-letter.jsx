import React from 'react';
import { pure } from 'recompose';

import { Letter } from '../letter';
import styles from './deleted-letter.module.css';
import { AnimationWrapper } from '../../animation-wrapper';

export const DeletedLetter = pure(props => {
  return (
    <AnimationWrapper
      animationClass={styles.deletedLetter}
      handleAnimationEnd={props.handleAnimationEnd}
    >
      <Letter {...props} />
    </AnimationWrapper>
  );
});
