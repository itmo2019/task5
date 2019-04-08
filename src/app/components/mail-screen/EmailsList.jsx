import React, { Component } from 'react';

import { EMail } from './EMail';
import { MailNavigation } from './MailNavigation';

const getSelectedEmailsCount = selectedEmailsStatus => {
  return Object.keys(selectedEmailsStatus).filter(emailID => !!selectedEmailsStatus[emailID])
    .length;
};

export class EmailsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allSelected: false,
      selectedEmailsIDs: {}
    };
  }

  componentDidUpdate() {
    if (
      this.state.allSelected &&
      this.props.emails.length > getSelectedEmailsCount(this.state.selectedEmailsIDs)
    ) {
      this.setState({
        allSelected: false
      });
    }
  }

  onCheckboxChange(index, newSelectedValue) {
    this.setState(prevState => {
      const newSelectedEmails = prevState.selectedEmailsIDs;
      newSelectedEmails[index] = newSelectedValue;
      return {
        selectedEmailsIDs: newSelectedEmails
      };
    });
  }

  onDeleteSelected() {
    if (this.state.allSelected || Object.keys(this.state.selectedEmailsIDs).length > 0) {
      this.props.deleteSelectedClicked();
    }
  }

  selectAllClicked() {
    this.setState(prevState => {
      const allSelected = !prevState.allSelected;

      const selectedEmailsIDs = {};
      if (allSelected) {
        this.props.emails.forEach(email => {
          selectedEmailsIDs[email.id] = true;
        });
      }

      return {
        allSelected,
        selectedEmailsIDs
      };
    });
  }

  render() {
    if (this.props.deleteSelected) {
      const selectedEmailsIDs = Object.assign({}, this.state.selectedEmailsIDs);
      if (this.state.allSelected) {
        for (let index = 0; index < this.props.emails.length; index++) {
          const emailID = this.props.emails[index].id;
          if (this.state.selectedEmailsIDs[emailID] !== false) {
            selectedEmailsIDs[emailID] = true;
          }
        }
      }
      if (Object.keys(selectedEmailsIDs).length > 0) {
        setTimeout(() => {
          this.props.handleEmailsRemoval(selectedEmailsIDs);
          this.setState({
            allSelected: false,
            selectedEmailsIDs: {}
          });
        }, 250);
      }
    }

    if (this.props.animteID !== null) {
      setTimeout(() => {
        this.props.newMessageAnimated();
      }, 600);
    }

    return (
      <section className="mail-screen">
        <MailNavigation
          onSelectAll={this.selectAllClicked.bind(this)}
          isSelected={this.state.allSelected}
          onDelete={this.onDeleteSelected.bind(this)}
          showInbox={this.props.showInbox}
          showRead={this.props.showRead}
        />
        <section className="mail-emails">
          {this.props.emails.map(email => {
            return (
              <EMail
                animateAppearance={this.props.animteID === email.id}
                emailID={email.id}
                key={`email_${email.id}`}
                iconUrl={email.iconUrl}
                senderName={email.senderName}
                title={email.title}
                text={email.text}
                dateMonth={email.date.month}
                dateDay={email.date.day}
                isUnread={email.isUnread}
                isSelected={this.state.selectedEmailsIDs[email.id] === true}
                onCheckboxChange={this.onCheckboxChange.bind(this)}
                removingSelected={this.props.deleteSelected}
                onOpenEmail={this.props.onOpenEmail}
              />
            );
          })}
        </section>
      </section>
    );
  }
}
