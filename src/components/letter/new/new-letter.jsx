import React from 'react';
import { pure } from 'recompose';
import { Letter } from '../letter';
import { AnimationWrapper } from '../../animation-wrapper';

import styles from './new-letter.module.css';

export const NewLetter = pure(props => {
  return (
    <AnimationWrapper
      animationClass={styles.newLetter}
      handleAnimationEnd={props.handleAnimationEnd}
    >
      <Letter {...props} />
    </AnimationWrapper>
  );
});
