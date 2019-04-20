import React, { Component } from 'react';
import Letterbox from './letterbox';
import { b } from './letters';

import './lettersLetterbox.css';

export default class LettersLetterbox extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			letterText: '',
			letterSender: ''
		}
		this.updateLetterText = this.updateLetterText.bind(this)
	}

	updateLetterText(text, sender) {
		this.setState({ letterText: text,
					    letterSender: sender })
	}

	render() {
	    return  <div className={b('letterbox_wrapper')}>
					<div className={b('letterbox_relative_wrapper')}>
						<LetterInvisibleCheckbox/>
						<Letter text={this.state.letterText} sender={this.state.letterSender}/>
						<Letterbox 
							updateLetter={this.updateLetterText}
							uncheckSelectAllCheckbox={this.props.uncheckSelectAllCheckbox}
							messages={this.props.messages}
							setMessageAppeared={this.props.setMessageAppeared}
							setLetterRef={this.props.setLetterRef}
							setMessageRead={this.props.setMessageRead}
							MAX_MESSAGES={this.props.MAX_MESSAGES}
							removeLetter={this.props.removeLetter}
						/>
					</div>
				</div>;
	}
}

function LetterInvisibleCheckbox() {
		return  <input id="show_letter" type="checkbox">
				</input>;
	}

function Letter(props) {
	return  <div className="letter">
				<label htmlFor="show_letter" className="close_letter">x</label>
				<div className="letter_text">
					<p>
						От: {props.sender}
						<br></br>
						Сообщение: {props.text}
					</p>
				</div>
			</div>;
}