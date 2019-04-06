import React, { PureComponent } from 'react';
import { SidebarLogo } from './sidebar-logo';
import { SidebarButtonNewLetter } from './sidebar-button-new-letter';
import { SidebarMenu } from './sidebar-menu';
import { SidebarMenuItem } from './sidebar-menu-item';
import '../common.blocks/sidebar.css';
import '../common.blocks/sidebar__logo-container.css';

export class Sidebar extends PureComponent {
  render() {
    return (
      <nav className="sidebar">
        <div className="sidebar__logo-container">
          <SidebarLogo/>
        </div>
        <SidebarButtonNewLetter action={this.props.addLetter}/>
        <SidebarMenu>
          <SidebarMenuItem name="Входящие" active/>
          <SidebarMenuItem name="Отправленные"/>
          <SidebarMenuItem name="Удалённые"/>
          <SidebarMenuItem name="Спам"/>
          <SidebarMenuItem name="Черновики"/>
          <SidebarMenuItem name="Создать папку"/>
        </SidebarMenu>
      </nav>
    );
  }
}
