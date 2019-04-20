import React, { Component } from 'react';
import { b } from './letters'

import './letterbox.css';

import Letter from '../template'

export default class Letterbox extends Component {

	constructor(props) {
		super(props);
		this.readLetter = this.readLetter.bind(this)
	}	

	render() {
		return  <div className={b('letterbox')}>
					{this.props.messages.slice(0, this.props.MAX_MESSAGES).map(this.constructLetter)}
				</div>;
	}

	readLetter = (messageID) => {
		this.props.updateLetter(this.props.messages[messageID].text,
								this.props.messages[messageID].sender)
		this.props.setMessageRead(messageID)
	}

	constructLetter = (letter) => {
		var id = this.props.messages.indexOf(letter)
		return  <Letter
					sender={letter.sender}
					theme={letter.theme}
					date={letter.date}
					isUnread={letter.unread}
					isChecked={letter.checked}
					isAppearing={letter.appearing}
					toBeRemoved={letter.removed}
					setMessageAppeared={this.props.setMessageAppeared}
					setLetterRef={this.props.setLetterRef}
					readLetter={this.readLetter}
					uncheckSelectAllCheckbox={this.props.uncheckSelectAllCheckbox}
					key={letter.ID}
					messageID={letter.ID}
					messageNum={id}
				/>
	}
}