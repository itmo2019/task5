import React from 'react';

import './letterDialog.css';

class LetterDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'LetterDialog',
      content: () => {
        return 'Типы не нужны';
      }
    };

    this.handleMailClick = this.handleMailClick.bind(this);
    this.handleLetterExitClick = this.handleLetterExitClick.bind(this);

    props.updateHandleMailClick(this.handleMailClick);
  }

  handleMailClick(event) {
    this.setState({
      className: `LetterDialog LetterDialog_Visible`,
      content: event.target.closest('.Letter').querySelector('.Letter__Topic').textContent
    });
  }

  handleLetterExitClick() {
    this.setState({ className: 'LetterDialog' });
  }

  render() {
    return (
      <section className={this.state.className}>
        <div className="LetterDialog__Exit" onClick={this.handleLetterExitClick}>
          x
        </div>
        <div className="LetterDialog__Content">{this.state.content}</div>
      </section>
    );
  }
}

export default LetterDialog;
