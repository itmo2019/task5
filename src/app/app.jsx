import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { LeftMenu } from './components/left-menu/LeftMenu';
import {
  MailScreenWithFooter
} from './components/mail-screen/MailScreenWithFooter';

const MAX_EMAILS_PER_PAGE = 30;

export class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      deleteSelected: false,
      emails: [
        {
          iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/f2/e1/51/f2e15135-a7d0-daa4-e2ec-6ddd9bf6088c/DriverAppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/320x0w.jpg',
          senderName: 'Lyft',
          title: 'Lyft IPO! Did you buy our shares already?',
          text: 'Lyft has made it to the IPO starting from 87$ per share! It would be higher soon!!!',
          date: {
            month: 'мар',
            day: 27,
          },
          isUnread: false,
        },
        {
          iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/f2/e1/51/f2e15135-a7d0-daa4-e2ec-6ddd9bf6088c/DriverAppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/320x0w.jpg',
          senderName: 'Jobs@Lyft',
          title: 'Looking for a driver to make more than 3,500$/month! Sign up now!',
          text: 'This is a great opportunity provided by Lyft to make some additional money or land a dream job as a driver!',
          date: {
            month: 'янв',
            day: 15,
          },
          isUnread: true,
        },
      ],
    }
  }
  
  handleEmailsRemoval(indices) {
    const newEmails = this.state.emails.map((email, index) => {
      if (indices[index] !== true) {
        return email
      }
      return null
    }).filter((x) => (x !== null))
    
    this.setState({
      deleteSelected: false,
      emails: newEmails
    })
  }
  
  deleteSelectedClicked() {
    this.setState({
      deleteSelected: true
    })
  }
  
  render() {
    return (
      <div className="inherit-size">
        <Header/>
        <div className="content">
          <LeftMenu/>
          <MailScreenWithFooter 
            emails={this.state.emails.slice(0, MAX_EMAILS_PER_PAGE)}
            handleEmailsRemoval={this.handleEmailsRemoval.bind(this)}
            deleteSelectedClicked={this.deleteSelectedClicked.bind(this)}
            deleteSelected={this.state.deleteSelected}
          />
        </div>
      </div>
    )
  }
}
