import React, { Component } from 'react';
import Letterbox from './letterbox'

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
	    return  <div className="letters__letterbox_wrapper">
					<div className="letters__letterbox_relative_wrapper">
						<LetterInvisibleCheckbox/>
						<Letter text={this.state.letterText} sender={this.state.letterSender}/>
						<Letterbox 
							updateLetter={this.updateLetterText}
							uncheckSelectAllCheckbox={this.props.uncheckSelectAllCheckbox}
							setSelectAll={this.props.setSelectAll}
							setUnselectAll={this.props.setUnselectAll}
							setNewMail={this.props.setNewMail}
							setDeleteLetters={this.props.setDeleteLetters}
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