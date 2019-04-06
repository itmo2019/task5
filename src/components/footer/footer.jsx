import React, { Component } from 'react';
import './footer.css';
import classNames from 'classnames';

function FooterItem(props) {
  const ref = props.ref === undefined ? '.' : props.ref;
  const text = props.text === undefined ? 'Элемент footer' : props.text;

  return (
    <li className="Footer__Item">
      <a className="Footer__Text" href={ref}>
        {text}
      </a>
    </li>
  );
}

export class Footer extends Component {
  render() {
    return (
      <footer className={classNames('Footer', this.props.className)}>
        <div className="Footer__Box">
          <ul className="Footer__List">
            <FooterItem text="Помощь и обратная связь" />
            <FooterItem text="Здесь могла бы быть ваша реклама с очень длинным названием, которое не вмещается в окно" />
            <FooterItem text="&copy; 2001-2018, Яндекс" />
          </ul>
        </div>
      </footer>
    );
  }
}
