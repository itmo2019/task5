import React from 'react';

import './mail-title.css';

export default class MailsTitle extends React.Component {
    constructor(props/* {callbacks, mailID, classList, isRead, avatar, sender, title, date, checked} */) {
        super(props)
        if (this.props.avatar) {
            this.resAvatar = <img src={this.props.avatar} alt="avatar" width="30px" height="30px" />;
        } else {
            this.resAvatar = <div></div>;
        }
        this.changeHandler = this.changeHandler.bind(this)
    } 
    render() {
        var classList = Array.from(this.props.classList).join(" ")
        var checkboxID = this.props.mailID + "_Checkbox"
        return  <div className={classList}>
                    <label className="MailTitle__CheckboxWrapper" htmlFor={checkboxID}>
                        <input type="checkbox" id={checkboxID} className="MailTitle__Checkbox" checked={this.props.checked} onChange={this.changeHandler}/>
                    </label>
                    <div className="MailTitle__ImgWrapper">{this.resAvatar}</div>
                    <div className="MailTitle__Sender">{this.props.sender}</div>
                    <div className="MailTitle__UnreadFlag"></div>
                    <label className="MailTitle__Title" htmlFor={this.props.mailID}>{this.props.title}</label>
                    <time className="MailTitle__Date">{this.props.date}</time>
                </div>
    }

    changeHandler() {
        this.props.callbacks.selected(!this.props.checked)
    }
}
