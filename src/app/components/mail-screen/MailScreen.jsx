import React, { Component } from 'react';

import { Footer } from './Footer';
import { EmailsList } from './EmailsList';
import { OpenedEmail } from './OpenedEmail';

import '../../styles/mail-screen/MailScreen.css';

export class MailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedEmailId: null,
      openedEmailText: null
    };
  }

  onCloseOpenedEmailClick() {
    this.props.markAsRead(this.state.openedEmailId);
    this.setState({
      openedEmailId: null,
      openedEmailText: null
    });
  }

  onOpenEmail(id, text) {
    this.setState({
      openedEmailId: id,
      openedEmailText: text
    });
  }

  render() {
    return !this.state.openedEmailText ? (
      <section className="content__mail-screen-and-footer">
        <EmailsList
          emails={this.props.emails}
          handleEmailsRemoval={this.props.handleEmailsRemoval}
          deleteSelectedClicked={this.props.deleteSelectedClicked}
          deleteSelected={this.props.deleteSelected}
          newMessagesAnimated={this.props.newMessagesAnimated}
          animateID={this.props.animateID}
          onOpenEmail={this.onOpenEmail.bind(this)}
          showInbox={this.props.showInbox}
          showRead={this.props.showRead}
          setNewAllSelected={this.props.setNewAllSelected}
          allSelected={this.props.allSelected}
        />
        <Footer />
      </section>
    ) : (
      <OpenedEmail
        text={this.state.openedEmailText}
        onCloseClick={this.onCloseOpenedEmailClick.bind(this)}
      />
    );
  }
}
