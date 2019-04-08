import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { LeftMenu } from './components/left-menu/LeftMenu';
import { MailScreenWithFooter } from './components/mail-screen/MailScreenWithFooter';
import * as ContentGenerator from './scripts/content-generation';

const MAX_EMAILS_PER_PAGE = 30;
const NEW_EMAIL_COOLDOWN = 1000 * 60 * 5;

const possibleMonths = [
  'янв',
  'фев',
  'мар',
  'апр',
  'май',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек'
];

const possibleIcons = [
  'https://pbs.twimg.com/profile_images/1039921444808011778/xPfyPxjy_400x400.jpg',
  'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/f2/e1/51/f2e15135-a7d0-daa4-e2ec-6ddd9bf6088c/DriverAppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/320x0w.jpg',
  'https://image.flaticon.com/teams/slug/google.jpg'
];

const possibleSenders = [
  'Яндекс.Музыка',
  'Яндекс.Мясо',
  'Lyft',
  'Uber',
  'Google'
];

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const getRand = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      animateFirst: false,
      deleteSelected: false,
      emails: [
        {
          id: 0,
          iconUrl:
            'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/f2/e1/51/f2e15135-a7d0-daa4-e2ec-6ddd9bf6088c/DriverAppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/320x0w.jpg',
          senderName: 'Lyft',
          title: 'Lyft IPO! Did you buy our shares already?',
          text: [
            'Lyft has made it to the IPO starting from 87$ per share! It would be higher soon!!!'
          ],
          date: {
            month: 'мар',
            day: 27
          },
          isUnread: false
        },
        {
          id: 1,
          iconUrl:
            'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/f2/e1/51/f2e15135-a7d0-daa4-e2ec-6ddd9bf6088c/DriverAppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/320x0w.jpg',
          senderName: 'Jobs@Lyft',
          title:
            'Looking for a driver to make more than 3,500$/month! Sign up now!',
          text: [
            'This is a great opportunity provided by Lyft to make some additional money or land a dream job as a driver!'
          ],
          date: {
            month: 'янв',
            day: 15
          },
          isUnread: true
        }
      ]
    };

    this.runNewEmailGeneration();
  }

  runNewEmailGeneration = async () => {
    await sleep(getRand(10, 3000));
    await this.newMail();

    while (true) {
      await sleep(NEW_EMAIL_COOLDOWN + getRand(0, NEW_EMAIL_COOLDOWN));
      await this.newMail();
    }
  };

  newMail = async () => {
    const paragraphs = await ContentGenerator.newRandomArticle()
      .type(ContentGenerator.RANDOM_TEXT_TYPES.ALL_MEAT)
      .paras(getRand(2, 10))
      .format(ContentGenerator.RANDOM_TEXT_FORMATS.JSON)
      .get();

    if (!paragraphs) {
      throw new Error('Failure to generate new message text');
    }

    const title = paragraphs[0]
      .split(' ')
      .slice(0, getRand(4, 10))
      .join(' ');
    const day = getRand(1, 28);
    const month = possibleMonths[getRand(0, possibleMonths.length - 1)];

    this.setState({
      filterText: '',
      animateFirst: true,
      emails: [
        ...this.state.emails,
        {
          id: this.state.emails.length + 1,
          iconUrl: possibleIcons[getRand(0, possibleIcons.length - 1)],
          date: {
            day,
            month
          },
          title,
          text: paragraphs,
          senderName: possibleSenders[getRand(0, possibleSenders.length - 1)],
          isUnread: true
        }
      ]
    });
  };

  handleEmailsRemoval(indices) {
    const newEmails = this.state.emails
      .map(email => {
        if (indices[email.id] !== true) {
          return email;
        }
        return null;
      })
      .filter(x => x !== null);

    this.setState({
      deleteSelected: false,
      emails: newEmails
    });
  }

  deleteSelectedClicked() {
    this.setState({
      deleteSelected: true
    });
  }

  newMessageAnimated() {
    this.setState({
      animateFirst: false
    });
  }

  markAsRead(id) {
    const newEmails = this.state.emails.map(email => {
      if (email.id !== id) {
        return email;
      }
      return Object.assign(Object.assign({}, email), { isUnread: false });
    });

    this.setState({
      emails: newEmails
    });
  }

  onFilterTextChange(filterTextEvent) {
    this.setState({
      filterText: filterTextEvent.target.value
    });
  }

  filteredEmails() {
    if (this.state.filterText !== '') {
      const filterTextLowerCased = this.state.filterText.toLowerCase();
      return this.state.emails.filter(email => {
        if (
          email.senderName.toLowerCase().indexOf(filterTextLowerCased) !== -1
        ) {
          return true;
        }

        if (email.title.toLowerCase().indexOf(filterTextLowerCased) !== -1) {
          return true;
        }

        return false;
      });
    }

    return this.state.emails;
  }

  render() {
    const emails = this.filteredEmails();

    return (
      <div className="inherit-size">
        <Header
          filterText={this.state.filterText}
          onFilterChange={this.onFilterTextChange.bind(this)}
        />
        <div className="content">
          <LeftMenu generateNewEMail={this.newMail} />
          <MailScreenWithFooter
            animateFirst={this.state.animateFirst}
            emails={emails
              .slice(Math.max(0, emails.length - MAX_EMAILS_PER_PAGE))
              .reverse()}
            handleEmailsRemoval={this.handleEmailsRemoval.bind(this)}
            deleteSelectedClicked={this.deleteSelectedClicked.bind(this)}
            deleteSelected={this.state.deleteSelected}
            newMessageAnimated={this.newMessageAnimated.bind(this)}
            markAsRead={this.markAsRead.bind(this)}
          />
        </div>
      </div>
    );
  }
}
