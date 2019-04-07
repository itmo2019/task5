import React, { Component } from 'react';

import { EMail } from './EMail';
import { MailNavigation } from './MailNavigation';

export class MailScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allSelected: false,
      selectedEmailsIDs: {},
    }
  }
  
  onCheckboxChange(index, newSelectedValue) {
    const newSelectedEmails = this.state.selectedEmailsIDs
    newSelectedEmails[index] = newSelectedValue

    this.setState({
      selectedEmailsIDs: newSelectedEmails
    })
  }
  
  selectAllClicked() {
    const allSelected = !this.state.allSelected

    this.setState({
      allSelected,
      selectedEmailsIDs: {},
    })
  }
  
  onDeleteSelected() {
    if (this.state.allSelected || 
        Object.keys(this.state.selectedEmailsIDs).length > 0) {
        this.props.deleteSelectedClicked()
    }
  }
  
  render() {
    if (this.props.deleteSelected) {
      const selectedEmailsIDs = Object.assign({}, this.state.selectedEmailsIDs)
      if (this.state.allSelected) {
        for (let index = 0; index < this.props.emails.length; index++) {
          const emailID = this.props.emails[index].id
          if (this.state.selectedEmailsIDs[emailID] !== false) {
            selectedEmailsIDs[emailID] = true
          }
        }
      }
      if (Object.keys(selectedEmailsIDs).length > 0) {
        setTimeout(() => {
          this.props.handleEmailsRemoval(selectedEmailsIDs)
          this.setState({
            allSelected: false,
            selectedEmailsIDs: {},
          })
        }, 250)
      }
    }
    
    if (this.props.animateFirst) {
      setTimeout(() => {
        this.props.newMessageAnimated()
      }, 600)
    }
    
    return (
      <section className="mail-screen">
        <MailNavigation 
          onSelectAll={this.selectAllClicked.bind(this)}
          isSelected={this.state.allSelected}
          onDelete={this.onDeleteSelected.bind(this)}
        />
        <section className="mail-emails">
          {
            this.props.emails.map((email, index) => {
              return <EMail
                  animateAppearance={this.props.animateFirst && index === 0}
                  emailID={email.id}
                  key={`email_${index}`}
                  iconUrl={email.iconUrl}
                  senderName={email.senderName}
                  title={email.title}
                  text={email.text}
                  dateMonth={email.date.month}
                  dateDay={email.date.day}
                  isUnread={email.isUnread}
                  isSelected={
                    (this.state.allSelected || 
                    this.state.selectedEmailsIDs[email.id] === true) &&
                    (this.state.selectedEmailsIDs[email.id] !== false)
                  }
                  onCheckboxChange={this.onCheckboxChange.bind(this)}
                  removingSelected={this.props.deleteSelected}
                  onOpenEmail={this.props.onOpenEmail}
                />
            })
          }
        </section>
      </section>
    )
  }
}
