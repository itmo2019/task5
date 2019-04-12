import React, { Component } from 'react';

import './letterbox.css';

import LetterTemplate from '../template'

export default class Letterbox extends Component {

	MAX_MESSAGES = 30
	MAX_MESSAGE_TIMEOUT = 600000
	MIN_MESSAGE_TIMEOUT = 10
	MESSAGE_FREQUENCY_TIMEOUT = 300000

	constructor(props) {
		super(props);
		this.state = {
			displayedMessages: [],
			hiddenMessages: [],
			msgID: 0,
			firstMessageTime: undefined,
			secondMessageTime: undefined
		}
		this.readLetter = this.readLetter.bind(this)
		this.setLetterAppeared = this.setLetterAppeared.bind(this)
		this.removeLetter = this.removeLetter.bind(this)
		this.uncheckSelectAllCheckbox = this.uncheckSelectAllCheckbox.bind(this)

		props.setSelectAll(this.selectAll)
		props.setUnselectAll(this.unselectAll)
		props.setNewMail(this.newMail)
		props.setDeleteLetters(this.deleteLetters)
	}

	componentDidMount() {
		var to = this.getRandomFromRange(this.MIN_MESSAGE_TIMEOUT, this.MAX_MESSAGE_TIMEOUT)
		setTimeout(this.sendMessage, to)
	}

	sendMessage = () => {
		this.newMail()
		var to = this.getRandomFromRange(this.MIN_MESSAGE_TIMEOUT, this.MAX_MESSAGE_TIMEOUT)
		if (this.state.firstMessageTime !== undefined) {
			to = Math.max(to, this.MESSAGE_FREQUENCY_TIMEOUT - new Date().getTime() + this.state.firstMessageTime)
		}
		this.setState({ firstMessageTime: this.state.secondMessageTime, secondMessageTime: new Date().getTime() })
		setTimeout(this.sendMessage, to)
	}

	getRandomFromRange(min, max) {
  		return Math.round(Math.random() * (max - min) + min);
	}	

	render() {
		return  <div className="letters__letterbox">
					{this.state.displayedMessages.map(this.constructLetter)}
				</div>;
	}

	readLetter = (messageID) => {
		this.props.updateLetter(this.state.displayedMessages[messageID].text,
								this.state.displayedMessages[messageID].sender)
		this.setState(state => {
			state.displayedMessages[messageID].unread = false
			return { displayedMessages: state.displayedMessages }
		})
	}

	uncheckSelectAllCheckbox = (messageID) => {
		this.setState(state => {
			state.displayedMessages[messageID].checked = !state.displayedMessages[messageID].checked
			this.props.uncheckSelectAllCheckbox(state.displayedMessages[messageID].checked)
			return { displayedMessages: state.displayedMessages }
		})
	}

	selectAll = () => {
		this.setState (state => {
			state.displayedMessages.forEach(letter => {letter.checked = true})
			return { displayedMessages: state.displayedMessages }
		})
	}

	unselectAll = () => {
		this.setState (state => {
			state.displayedMessages.forEach(letter => {letter.checked = false})
			return { displayedMessages: state.displayedMessages }
		})
	}

	constructLetter = (letter) => {
		var id = Array.prototype.indexOf.call(this.state.displayedMessages, letter)
		return  <LetterTemplate
					sender={letter.sender}
					theme={letter.theme}
					date={letter.date}
					isUnread={letter.unread}
					isChecked={letter.checked}
					isAppearing={letter.appearing}
					toBeRemoved={letter.removed}
					setLetterAppeared={this.setLetterAppeared}
					removeLetter={this.removeLetter}
					readLetter={this.readLetter}
					uncheckSelectAllCheckbox={this.uncheckSelectAllCheckbox}
					key={letter.ID}
					messageID={letter.ID}
					messageNum={id}
				/>
	}

	setLetterAppeared = (messageID) => {
		this.setState (state => {
			state.displayedMessages[messageID].appearing = false
			return { displayedMessages: state.displayedMessages }
		})
	}

	deleteLetters = () => {
		this.setState (state => {
			state.displayedMessages.forEach(msg => {
				if (msg.checked) {
					msg.removed = true
					msg.checked = false
				}
			})
			return { displayedMessages: state.displayedMessages }
		})
	}

	removeLetter = (messageKey) => {
		this.setState (state => {
			var messageID = Array.prototype.indexOf.call(state.displayedMessages,
								state.displayedMessages.find(elem => elem.ID === messageKey))
			if (messageID !== -1) {
				state.displayedMessages.splice(messageID, 1)
				if (state.hiddenMessages.length !== 0) {
					var old = state.hiddenMessages.splice(0, 1)[0]
					state.displayedMessages.push(old)
				}
			}
			return { displayedMessages: state.displayedMessages, hiddenMessages: state.hiddenMessages }
		})
	}

	newMail = () => {
		this.setState( {msgID: this.state.msgID + 1} )
		var newMessage = new Message(this.state.msgID)
		this.setState(state => {
			state.displayedMessages.unshift(newMessage)
			if (state.displayedMessages.length > this.MAX_MESSAGES) {
				var old = state.displayedMessages.splice(this.MAX_MESSAGES, 1)[0]
				state.hiddenMessages.unshift(old)
			}
			return { displayedMessages: state.displayedMessages, hiddenMessages: state.hiddenMessages }
		})
	}
}

class Message {
	constructor(id) {
		this.sender = this.getRandomSender()
		this.theme = this.getRandomTheme()
		this.text = this.theme + ' ' + this.getRandomText()
		this.unread = true
		this.checked = false
		this.appearing = true
		this.removed = false
		this.ID = id
		this.date = new Date().toLocaleDateString('ru-RU', {day: 'numeric', month: 'short'})
	}

	getRandomSender() {
		var subjects=['I','You','Bob','John','Sue','Kate','The lizard people']
		return subjects[Math.round(Math.random()*(subjects.length-1))]
	}

	getRandomTheme() {
		return this.getRandomSentence()
	}

	getRandomText() {
		var numSentences = Math.round(Math.random() * 10)
		var res = ""
		for (var i = 0; i < numSentences; i++) res += this.getRandomSentence() + ' '
		return res
	}

	getRandomSentence() { // source: http://pastehtml.com/view/1c0gckz.html
		var subjects=['I','You','Bob','John','Sue','Kate','The lizard people']
		var verbs=['will search for','will get','will find','attained','found','will start interacting with','will accept','accepted']
		var objects=['Billy','an apple','a Triforce','the treasure','a sheet of paper']
		var endings=['.',', right?','.',', like I said.','.',', just like your momma!']
		return subjects[Math.round(Math.random()*(subjects.length-1))]+' '+verbs[Math.round(Math.random()*(verbs.length-1))]+' '
		+objects[Math.round(Math.random()*(objects.length-1))]+endings[Math.round(Math.random()*(endings.length-1))]
	}

}