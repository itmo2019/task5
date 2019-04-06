import React from 'react';

import './letters.css';

import LettersOptions from './lettersOptions'
import LettersLetterbox from './lettersLetterbox'
import LettersFooter from './lettersFooter'

function Letters() {
    return  <div className="letters_wrapper">
    			<div className="letters">
                    <LettersOptions/>
                    <LettersSeparator/>
                    <LettersLetterbox/>
                    <LettersSeparator/>
                    <LettersFooter/>
                </div>
            </div>;  
}

function LettersSeparator() {
    return  <div className="letters__separator">
            </div>;
}

export default Letters;
