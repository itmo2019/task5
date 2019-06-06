import React from 'react';
import { pure } from 'recompose';

export const AnimationWrapper = pure(
  ({ animationClass, handleAnimationStart, handleAnimationEnd, children }) => {
    return (
      <div
        className={animationClass}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </div>
    );
  }
);
