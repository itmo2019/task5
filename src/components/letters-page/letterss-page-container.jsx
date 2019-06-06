import React, { Component } from 'react';

import { LettersPageComponent } from './letters-page-component';

export class LettersPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [
        {
          id: '0',
          unread: true,
          user: {
            name: 'Яндекс.Почта',
            imageUrl: 'https://thispersondoesnotexist.com/image'
          },
          subject: 'Как читать почту с мобильного',
          date: new Date()
        },
        {
          id: '1',
          unread: false,
          user: {
            name: 'Вася Петров'
          },
          subject: 'Как не читать почту не с мобильного',
          date: new Date()
        }
      ]
    };
  }

  render() {
    return <LettersPageComponent letters={this.state.letters.slice(0, 30)} />;
  }
}
