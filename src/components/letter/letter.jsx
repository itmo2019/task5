import React from 'react';

import Checkbox from '../checkbox/checkbox';

import './letter.css';
import '../letterBox/letterBox.css';

export default class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: `Letter ${props.className}`,
      hidden: false,
      setCheckedFalse: undefined
    };

    this.setHidden = this.setHidden.bind(this);

    props.updateSetHidden(this.setHidden);
  }

  componentDidMount() {
    const self = this;
    function animate() {
      self.setState(state => {
        return { className: `Letter_Added ${state.className}` };
      });
    }
    setTimeout(animate, 20);
  }

  setHidden(value) {
    this.setState({ hidden: value });
    this.state.setCheckedFalse();
  }

  updateSetCheckedFalse = value => {
    this.setState({ setCheckedFalse: value });
  };

  render() {
    return (
      <li className={this.state.className} hidden={this.state.hidden}>
        <ul className="Letter__Line">
          <li className="Letter__Item">
            <Checkbox updateSetCheckedFalse={this.updateSetCheckedFalse} />
          </li>
          <li className="Letter__Item Letter__Author">{this.props.authorLogo}</li>
          <li className="Letter__Item Letter__AuthorName">{this.props.authorName}</li>
          <li className="Letter__Item Letter__ReadMark_Unread" />
          <li className="Letter__Item Letter__Topic">{this.props.letterContent}</li>
          <li className="Letter__Item Letter__Date">{this.props.date}</li>
        </ul>
        <a className="Letter__LinkOpen" onClick={this.props.handleMailClick} />
        <hr className="LetterBox__Hr" />
      </li>
    );
  }
}
