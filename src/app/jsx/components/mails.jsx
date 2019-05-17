import {Component} from "react";
import React from "react";
import '../../styles/animation.css';
import '../../styles/components.css';

export class Mail extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.node = React.createRef();
  }

  componentDidMount() {
    if (this.props.animate) {
      this.node.current.classList.add("mail_offset-40px");
    }
    console.log(this.node.current.offsetHeight);
    this.node.current.classList.add("create-animation");
  }

  render() {
    let buildName = (this.props.delete ? " mail delete-animation " : " mail ")
      + (this.props.read ? " mail_status_read " : " mail_status_not-read ");
    return (
      <div onClick={this.props.clickMailContent(this.props.id, this.props.text)}
           ref={this.node}
           className={buildName}
           onTransitionEnd={this.props.onTransitionEnd(this.props.id, this.props.delete, this.props.animate)}
           data-delete id={this.props.id}>
        <div className="mail__item mail__select">
          <label className="mails-checkbox">
            <input className="mails-checkbox__checkbox" type="checkbox" checked={this.props.select}
                   onChange={this.props.changeStateMail}/>
            <span className="mails-checkbox__alternative-drawing">
          </span>
          </label>
        </div>
        <img className="mail__item mail__logo" src={this.props.image}/>
        <div className="mail__item mail__title text_hide-by-size" data-delete>{this.props.title}</div>
        <div className="mail__item mail__text-message text_hide-by-size" data-delete>{this.props.text}</div>
        <div className="mail__item mail__receive-time text_hide-by-size" data-delete>{this.props.date}</div>
      </div>

    );
  }
}
