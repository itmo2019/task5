import React, { Component } from 'react';

import './Workplace.css';
import { Opt } from './Opt';
import { Letter } from './Letter';
import { Topic } from './Topic';
import './yandexCircle.jpg';

import { genLetter, genData , genNum} from '../source/Mails';

let active = true;
const maxNumOfLetters = 30;

export class Workplace extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: [], letters: [], hiddenLetters: [] };
    this.mailAdded = this.mailAdded.bind(this);
    this.lettersDeleted = this.lettersDeleted.bind(this);
    this.letterChosen = this.letterChosen.bind(this);
    this.allLettersChosen = this.allLettersChosen.bind(this);
  }

  allLettersChosen(flag) {
    const newLetters = this.state.letters.map(letter => {
      return { ...letter, chosen: flag };
    });
    this.setState(state => {
      return { letters: newLetters }
    });
  }

  letterChosen(id) {
    const newLetters = this.state.letters.map(letter => {
      if (letter.id !== id) return letter;
      return { ...letter, chosen: !letter.chosen };
    });
    this.setState(state => {
      return { letters: newLetters }
    });
  }

  lettersDeleted() {
    let letters = this.state.letters.map(letter => {
      if (letter.chosen) {
        letter.animat = 'delete';
        return letter;
      }
      return letter;
    });
    this.setState(state => {
      return {
        letters: letters
      };
    });
    window.setTimeout(
      function(letters) {
        letters = letters.filter(el => {
          return el.animat !== 'delete';
        });
        let hidLetters = this.state.hiddenLetters;
        while (letters.length < maxNumOfLetters && hidLetters.length > 0) {
          let letter = hidLetters.shift();
          letter.animat = 'add';
          letters.push(letter);
        }
        this.setState(state => {
          return {
            letters: letters,
            hiddenLetters: hidLetters
          };
        });
      }.bind(this),
      1000,
      letters
    );
  }

  mailAdded(num) {
    const newLetter = genLetter();
    this.setState(state => {
      return {
        topics: [
          {
            id: num,
            topic: newLetter.topic,
            message: newLetter.message
          },
          ... state.topics
        ],
        letters: [
          {
            id: num,
            topic: newLetter.topic,
            title: newLetter.title,
            author: newLetter.author,
            data: genData(),
            deleted: false,
            animat: 'add',
            chosen: false
          },
          ...state.letters
        ]
      };
    });
    let letters = this.state.letters;
    let hidLetters = this.state.hiddenLetters;
    if (letters.length > maxNumOfLetters) {
      let addLetter = letters.pop();
      addLetter.animat = 'noth';
      hidLetters.unshift(addLetter);
      this.setState(state => {
        return {
          letters: letters,
          hiddenLetters: hidLetters
        };
      });
    }
    setTimeout(this.mailAdded, (genNum(5, 10)) * 60 * 1000, num + 1);
  }

  render() {
    if (active) {
      active = false;
      setTimeout(this.mailAdded, (genNum(1, 10)) * 60 * 1000, 0);
    }
    return (
      <div className="workplace body__workplace">
        <Opt lettersDeleted={this.lettersDeleted} allLettersChosen={this.allLettersChosen} key={0} id={0} />
        <div className="topics">
          {this.state.topics.map(letter => {
            return (
              <Topic
                id={letter.id}
                key={letter.id}
                topic={letter.topic}
                message={letter.message}
              />
            );
          })}
        </div>
        <div className="list-of-letters workplace__list-of-letters">
          {this.state.letters.map(letter => {
            if (letter != null)
              return (
                <Letter
                  id={letter.id}
                  key={letter.id}
                  topic={letter.topic}
                  title={letter.title}
                  author={letter.author}
                  data={letter.data}
                  animat={letter.animat}
                  letterChosen={this.letterChosen}
                  chosen={letter.chosen}
                />
              );
          })}
        </div>
      </div>
    );
  }
}
