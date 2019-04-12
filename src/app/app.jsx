import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { LeftMenu } from './components/left-menu/LeftMenu';
import { MailScreen } from './components/mail-screen/MailScreen';
import * as ContentGenerator from './scripts/content-generation';

const MAX_EMAILS_PER_PAGE = 30;
const NEW_EMAIL_COOLDOWN = 1000 * 60 * 5;

const FOLDER_READ = 'READ';
const FOLDER_INBOX = 'INBOX';

let GLOBAL_EMAIL_ID = 2;

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
  'https://image.flaticon.com/teams/slug/google.jpg',
  'https://static1.squarespace.com/static/53fe4a70e4b0a2293ab0e42a/t/53fe4b7ce4b03ae33c17c7d2/1464311372584/?format=1500w'
];

const possibleSenders = ['Яндекс.Музыка', 'Яндекс.Мясо', 'Lyft', 'Uber', 'Google'];

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const getRand = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

const filterEmails = (emails, currentFolder, filterText, predicate) => {
  let shownEmails = 0;
  const filteredEmails = [];
  const fullPredicate = email => {
    // Folder filter
    if (currentFolder === FOLDER_READ && email.isUnread) {
      return false;
    }
    // Filter by search query
    if (filterText !== '') {
      const filterTextLowerCased = filterText.toLowerCase();
      if (
        email.senderName.toLowerCase().indexOf(filterTextLowerCased) === -1 &&
        email.title.toLowerCase().indexOf(filterTextLowerCased) === -1
      ) {
        return false;
      }
    }
    // Filter by given predicate
    if (predicate) {
      return predicate(email);
    }
    return true;
  };
  emails.forEach(email => {
    const newEmail = Object.assign({}, email);
    if (fullPredicate(newEmail) && shownEmails < MAX_EMAILS_PER_PAGE) {
      newEmail.display = true;
      shownEmails++;
    } else {
      newEmail.display = false;
    }
    filteredEmails.push(newEmail);
  });

  return filteredEmails;
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      allSelected: false,
      folder: FOLDER_INBOX,
      deleteSelected: false,
      emails: [
        {
          id: 1,
          iconUrl:
            'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/f2/e1/51/f2e15135-a7d0-daa4-e2ec-6ddd9bf6088c/DriverAppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/320x0w.jpg',
          senderName: 'Jobs@Lyft',
          title: 'Looking for a driver to make more than 3,500$/month! Sign up now!',
          text: [
            'This is a great opportunity provided by Lyft to make some additional money or land a dream job as a driver!'
          ],
          date: {
            month: 'янв',
            day: 15
          },
          isUnread: true,
          wasShown: true,
          display: true
        },
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
          isUnread: false,
          wasShown: true,
          display: true
        }
      ]
    };

    this.runNewEmailGeneration();
  }

  onFilterTextChange(filterTextEvent) {
    const filterText = filterTextEvent.target.value;
    this.setState(prevState => {
      return {
        filterText,
        emails: filterEmails(prevState.emails, prevState.folder, filterText)
      };
    });
  }

  runNewEmailGeneration = async () => {
    await sleep(getRand(0, 100));
    await this.newMail();

    await sleep(NEW_EMAIL_COOLDOWN + getRand(0, NEW_EMAIL_COOLDOWN));
    this.runNewEmailGeneration();
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

    this.setState(prevState => {
      return {
        filterText: '',
        emails: filterEmails(
          [
            {
              id: GLOBAL_EMAIL_ID++,
              iconUrl: possibleIcons[getRand(0, possibleIcons.length - 1)],
              date: {
                day,
                month
              },
              title,
              text: paragraphs,
              senderName: possibleSenders[getRand(0, possibleSenders.length - 1)],
              isUnread: true,
              wasShown: false,
              display: prevState.folder === FOLDER_INBOX
            },
            ...prevState.emails
          ],
          prevState.folder,
          prevState.filterText
        )
      };
    });
  };

  handleEmailsRemoval(indices, cb) {
    this.setState(prevState => {
      const newEmails = prevState.emails
        .map(email => {
          if (indices[email.id] !== true) {
            return email;
          }
          return null;
        })
        .filter(x => x !== null);

      return {
        deleteSelected: false,
        emails: newEmails
      };
    });
    cb();
  }

  deleteSelectedClicked() {
    this.setState({
      deleteSelected: true
    });
  }

  markAsRead(id) {
    this.setState(prevState => {
      const newEmails = prevState.emails.map(email => {
        if (email.id !== id) {
          return email;
        }
        return Object.assign(Object.assign({}, email), { isUnread: false });
      });

      return {
        emails: newEmails
      };
    });
  }

  showInbox() {
    this.setState(prevState => {
      return {
        folder: FOLDER_INBOX,
        emails: filterEmails(prevState.emails, FOLDER_INBOX, prevState.filterText)
      };
    });
  }

  showRead() {
    this.setState(prevState => {
      return {
        folder: FOLDER_READ,
        emails: filterEmails(prevState.emails, FOLDER_READ, prevState.filterText)
      };
    });
  }

  newMessagesAnimated() {
    if (this.state.folder === FOLDER_INBOX) {
      this.setState(prevState => {
        return {
          emails: prevState.emails.map(email => {
            return {
              ...email,
              wasShown: true
            };
          })
        };
      });
    }
  }

  setNewAllSelected(allSelected) {
    this.setState({ allSelected });
  }

  render() {
    return (
      <div className="inherit-size">
        <Header
          filterText={this.state.filterText}
          onFilterChange={this.onFilterTextChange.bind(this)}
        />
        <div className="content">
          <LeftMenu generateNewEMail={this.newMail} />
          <MailScreen
            emails={this.state.emails}
            handleEmailsRemoval={this.handleEmailsRemoval.bind(this)}
            deleteSelectedClicked={this.deleteSelectedClicked.bind(this)}
            deleteSelected={this.state.deleteSelected}
            markAsRead={this.markAsRead.bind(this)}
            showInbox={this.showInbox.bind(this)}
            showRead={this.showRead.bind(this)}
            newMessagesAnimated={this.newMessagesAnimated.bind(this)}
            setNewAllSelected={this.setNewAllSelected.bind(this)}
            allSelected={this.state.allSelected}
          />
        </div>
      </div>
    );
  }
}
