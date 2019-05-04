import React from "react"
import { Menu } from "./menu/Menu"
import { MailBox } from "./mailbox/MailBox";

export function MainContent(props) {
  return (
    <main class="main-content">
        <Menu />
        <MailBox />
      </main>
  );
}
