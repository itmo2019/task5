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
          newMessageAnimated={this.props.newMessageAnimated}
          animateFirst={this.props.animateFirst}
          onOpenEmail={this.onOpenEmail.bind(this)}
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
