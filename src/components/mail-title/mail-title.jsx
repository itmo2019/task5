import React from 'react';

import './mail-title.css';

export default class MailsTitle extends React.Component {
    constructor(props/* {callbacks, mailID, modifiers, isRead, avatar, sender, title, date} */) {
        super(props)
        this.state = {checked: false}
        this.resClass = "MailTitle MailTitle_" + (this.props.isRead==="true" ? "Read" : "Unread");
        if (this.props.avatar) {
            this.resAvatar = <img src={this.props.avatar} alt="avatar" width="30px" height="30px" />;
        } else {
            this.resAvatar = <div></div>;
        }
        this.props.callbacks.setSelect(check => {
            this.props.callbacks.selected(check)
            this.setState({checked: check})
        })
        this.changeHandler = this.changeHandler.bind(this)
    } 
    render() {
        var modifiers = {}
        if (this.props.modifiers) {
            this.props.modifiers.split(' ')
                     .forEach(mod => modifiers[mod]='')
        }
        return  <div className={this.resClass} {...modifiers}>
                    <input type="checkbox" className="MailTitle__Checkbox" checked={this.state.checked} onChange={this.changeHandler}/>
                    <div className="MailTitle__ImgWrapper">{this.resAvatar}</div>
                    <div className="MailTitle__Sender">{this.props.sender}</div>
                    <div className="MailTitle__UnreadFlag"></div>
                    <label className="MailTitle__Title" htmlFor={this.props.mailID}>{this.props.title}</label>
                    <time className="MailTitle__Date">{this.props.date}</time>
                </div>
    }   
    changeHandler() {
        this.props.callbacks.selected(!this.state.checked)
        this.setState({checked: !this.state.checked})
    }
}