import React, { Component } from 'react';

import './letters.css';

import LettersOptions from './lettersOptions'
import LettersLetterbox from './lettersLetterbox'
import LettersFooter from './lettersFooter'

export default class Letters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAllCheckbox: false,
            selectAllLetters: undefined,
            unselectAllLetters: undefined,
            newMail: undefined,
            deleteLetters: undefined
        }
        this.deleteLettersAndUncheck = this.deleteLettersAndUncheck.bind(this)
        this.clickSelectAll = this.clickSelectAll.bind(this)
    }

    uncheckSelectAllCheckbox = (value) => {
        if (!value) this.setState({selectAllCheckbox: false})
    }

    selectAll() {
        this.setState({selectAllCheckbox: true})
        this.state.selectAllLetters()
    }

    unselectAll() {
        this.setState({selectAllCheckbox: false})
        this.state.unselectAllLetters()
    }

    clickSelectAll() {
        if (this.state.selectAllCheckbox) this.unselectAll()
        else this.selectAll()
    }

    setSelectAll = (fun) => {
        this.setState({selectAllLetters: fun})
    }

    setUnselectAll = (fun) => {
        this.setState({unselectAllLetters: fun})
    }

    setNewMail = (fun) => {
        this.setState({newMail: fun})
    }

    setDeleteLetters = (fun) => {
        this.setState({deleteLetters: fun})
    }

    deleteLettersAndUncheck() {
        this.uncheckSelectAllCheckbox(false)
        this.state.deleteLetters()
    }

    render() {
        return  <div className="letters_wrapper">
                    <div className="letters">
                        <LettersOptions
                            clickSelectAll={this.clickSelectAll}
                            isChecked={this.state.selectAllCheckbox}
                            newMail={this.state.newMail}
                            deleteLetters={this.deleteLettersAndUncheck}
                        />
                        <LettersSeparator/>
                         <LettersLetterbox
                             uncheckSelectAllCheckbox={this.uncheckSelectAllCheckbox}
                             setSelectAll={this.setSelectAll}
                             setUnselectAll={this.setUnselectAll}
                             setNewMail={this.setNewMail}
                             setDeleteLetters={this.setDeleteLetters}
                         />
                        <LettersSeparator/>
                        <LettersFooter/>
                    </div>
                 </div>;  
    }  
    
}

function LettersSeparator() {
    return  <div className="letters__separator">
            </div>;
}
