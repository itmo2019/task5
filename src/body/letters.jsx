import React, { Component } from 'react';
import { block } from 'bem-cn';

import './letters.css';

import LettersOptions from './lettersOptions'
import LettersLetterbox from './lettersLetterbox'
import LettersFooter from './lettersFooter'
import Message from './message'

const b = block('letters')

export default class Letters extends Component {

    MAX_MESSAGES = 30
    MAX_MESSAGE_TIMEOUT = 600000
    MIN_MESSAGE_TIMEOUT = 10
    MESSAGE_FREQUENCY_TIMEOUT = 300000

    constructor(props) {
        super(props);
        this.state = {
            firstMessageTime: null,
            secondMessageTime: null,
            msgID: 0,
            messages: [],
            selectAllCheckbox: false
        }
        this.deleteLettersAndUncheck = this.deleteLettersAndUncheck.bind(this)
        this.markAsRead = this.markAsRead.bind(this)
        this.clickSelectAll = this.clickSelectAll.bind(this)
        this.removeLetter = this.removeLetter.bind(this)
        this.setMessageAppeared = this.setMessageAppeared.bind(this)
        this.setMessageRead = this.setMessageRead.bind(this)
        this.setLetterRef = this.setLetterRef.bind(this)
        this.uncheckSelectAllCheckbox = this.uncheckSelectAllCheckbox.bind(this)
    }

    uncheckSelectAllCheckbox = (value) => {
        if (!value) this.setState({selectAllCheckbox: false})
    }

    uncheckSelectAllCheckboxOnLetter = (messageID) => {
        this.setState(state => {
            var copy = [...state.messages]
            copy[messageID].checked = !copy[messageID].checked
            this.uncheckSelectAllCheckbox(copy[messageID].checked)
            return { messages: copy }
        })
    }

    selectAll() {
        this.setState({selectAllCheckbox: true})
        this.setState (state => {
            var copy = [...state.messages]
            copy.slice(0, this.MAX_MESSAGES).forEach(letter => {letter.checked = true})
            return { messages: copy }
        })
    }

    unselectAll() {
        this.setState({selectAllCheckbox: false})
        this.setState (state => {
            var copy = [...state.messages]
            copy.slice(0, this.MAX_MESSAGES).forEach(letter => {letter.checked = false})
            return { messages: copy }
        })
    }

    clickSelectAll() {
        if (this.state.selectAllCheckbox) this.unselectAll()
        else this.selectAll()
    }

    deleteLetters = () => {
        this.setState (state => {
            var copy = [...state.messages]
            copy.forEach(msg => {
                if (msg.checked) {
                    msg.removed = true
                    msg.ref.current.addEventListener('transitionend', (event) => {
                        this.removeLetter(msg.ID)
                    })
                    msg.checked = false
                }
            })
            return { messages: copy }
        })
    }

    markAsRead = () => {
        this.setState (state => {
            var copy = [...state.messages]
            copy.forEach(msg => {
                if (msg.checked) {
                    msg.unread = false
                }
            })
            return { messages: copy }
        })
    }

    removeLetter = (messageKey) => {
        this.setState (state => {
            var messageID = state.messages.indexOf(state.messages.find(elem => elem.ID === messageKey))
            var copy = [...state.messages]
            if (messageID !== -1) {
                copy.splice(messageID, 1)
            }
            return { messages: copy }
        })
    }

    deleteLettersAndUncheck() {
        this.uncheckSelectAllCheckbox(false)
        this.deleteLetters()
    }

    newMail = () => {
        this.uncheckSelectAllCheckbox(false)
        this.setState(state => { return {msgID: state.msgID + 1} })
        var newMessage = new Message(this.state.msgID)
        this.setState(state => {
            var copy = [...state.messages]
            copy.unshift(newMessage)
            if (copy.length > this.MAX_MESSAGES) copy[this.MAX_MESSAGES].checked = false
            return { messages: copy }
        })
    }

    sendMessage = () => {
        this.newMail()
        var to = this.getRandomFromRange(this.MIN_MESSAGE_TIMEOUT, this.MAX_MESSAGE_TIMEOUT)
        if (this.state.firstMessageTime != null) {
            to = Math.max(to, this.MESSAGE_FREQUENCY_TIMEOUT - new Date().getTime() + this.state.firstMessageTime)
        }
        this.setState(state => { return { firstMessageTime: state.secondMessageTime, secondMessageTime: new Date().getTime() } })
        setTimeout(this.sendMessage, to)
    }

    getRandomFromRange(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    setMessageAppeared = (messageID) => {
        this.setState (state => { 
            var copy = [...state.messages]
            copy[messageID].appearing = false
            return { messages: copy }
        })
    }

    setMessageRead = (messageID) => {
        this.setState (state => { 
            var copy = [...state.messages]
            copy[messageID].unread = false
            return { messages: copy }
        })
    }

    setLetterRef = (ref, messageKey) => {
        this.setState (state => { 
            var copy = [...state.messages]
            copy.find(elem => elem.ID === messageKey).ref = ref
            return { messages: copy }
        })
    }

    componentDidMount() {
        var to = this.getRandomFromRange(this.MIN_MESSAGE_TIMEOUT, this.MAX_MESSAGE_TIMEOUT)
        setTimeout(this.sendMessage, to)
    }

    render() {
        return  <div className="letters_wrapper">
                    <div className={b()}>
                        <LettersOptions
                            clickSelectAll={this.clickSelectAll}
                            isChecked={this.state.selectAllCheckbox}
                            newMail={this.newMail}
                            deleteLetters={this.deleteLettersAndUncheck}
                            markAsRead={this.markAsRead}
                        />
                        <LettersSeparator/>
                         <LettersLetterbox
                             uncheckSelectAllCheckbox={this.uncheckSelectAllCheckboxOnLetter}
                             messages={this.state.messages}
                             setMessageAppeared={this.setMessageAppeared}
                             setLetterRef={this.setLetterRef}
                             setMessageRead={this.setMessageRead}
                             MAX_MESSAGES={this.MAX_MESSAGES}
                             removeLetter={this.removeLetter}
                         />
                        <LettersSeparator/>
                        <LettersFooter/>
                    </div>
                 </div>;  
    }  
    
}

function LettersSeparator() {
    return  <div className={b('separator')}>
            </div>;
}

export { b };