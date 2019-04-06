import React, { Component } from 'react';
import './burger-menu.css';
import classNames from 'classnames';

export class BurgerMenu extends Component {
  render() {
    return (
      <div className={classNames('BurgerMenu', this.props.className)}>
        <div className="BurgerMenu__Rect" />
        <div className="BurgerMenu__Rect" />
        <div className="BurgerMenu__Rect" />
      </div>
    );
  }
}
