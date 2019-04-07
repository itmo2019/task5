import React, { Component } from 'react'

import { Footer } from './Footer'
import { MailScreen } from './MailScreen'

import '../../styles/mail-screen/MailScreen.css'

export class MailScreenWithFooter extends Component {
  render() {
    return (
      <section className="content__mail-screen-and-footer">
        <MailScreen 
          emails={this.props.emails}
          handleEmailsRemoval={this.props.handleEmailsRemoval}
          deleteSelectedClicked={this.props.deleteSelectedClicked}
          deleteSelected={this.props.deleteSelected}
        />
        <Footer />
      </section>
    )
  }
}
