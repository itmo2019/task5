import React, { Component } from 'react';

import { Mail } from './Mail';
import { MailAction } from './MailAction';

import './MailBox.css';

export class MailBox extends Component {
  render() {
    let spanContacts = this.initContats();

    return (
      <div className="mail-box">
        <MailAction />
        {/* <div class="mail-article" id="mail-article-id">
          <div class="mail-article__text" id="mail-article__text-id"></div>
          <div class="mail-article__close" onclick="closeMail()">x</div>
        </div> */}
        <div class="mails">
          <Mail />
        </div>
        <div className="contacts">
          <footer className="contacts__info">{spanContacts}</footer>
        </div>
      </div>
    );
  }

  initContats() {
    let spanContacts = ['Помощь и обратная связь', 'Реклама'].map(text => (
      <ContactInfo text={text} />
    ));

    spanContacts.unshift(<ContactInfo text="&copy; 2001 &ndash; 2018, Яндекс" isLink={true} />);
    return spanContacts;
  }
}

function ContactInfo(props) {
  let text = !!props.isLink ? <a href="">{props.text}</a> : props.text;
  return <span className="contact__info-item">{text}</span>;
}
