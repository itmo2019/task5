import React from 'react';

import './lettersLetterbox.css';

function LettersLetterbox() {
    return  <div className="letters__letterbox_wrapper">
				<div class="letters__letterbox_relative_wrapper">
					<LetterInvisibleCheckbox/>
					<Letter/>
					<Letterbox/>
				</div>
			</div>;
}

function LetterInvisibleCheckbox() {
	return  <input id="show_letter" type="checkbox">
			</input>;
}

function Letter() {
	return  <div className="letter">
				<label for="show_letter" className="close_letter">x</label>
				<div className="letter_text"></div>
			</div>;
}

function Letterbox() {
	return  <div className="letters__letterbox">
			</div>;
}

export default LettersLetterbox;
