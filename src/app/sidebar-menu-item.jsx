import React, { Component } from 'react';
import '../common.blocks/sidebar__menu-item_active.css';
import '../common.blocks/sidebar__menu-item.css';
import '../common.blocks/mail-link.css';

export class SidebarMenuItem extends Component {
  render() {
    const active = this.props.active ? 'sidebar__menu-item_active' : '';

    return (
      <li>
        <a className={`sidebar__menu-item ${active}`} href="#">
          {this.props.name}
        </a>
      </li>
    );
  }
}
