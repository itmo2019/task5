import React, { useContext } from 'react';
import { LettersContext } from '../../contexts/lettersContext';
import { Letter } from '../letter';
import styles from './deleting-letter.module.css';

export const DeletingLetter = props => {
  const { changeLetter, deleteLetters } = useContext(LettersContext);

  const handleAnimationEnd = () => {
    deleteLetters([props.id]);
  };

  return (
    <div
      className={styles.deletingLetter}
      onAnimationEnd={handleAnimationEnd}
    >
      <Letter {...props} />
    </div>
  );
};
