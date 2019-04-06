import React from 'react';

import './supportLine.css';

function SupportLink(props) {
  return (
    <a className="SupportLine__Item SupportLine__Item_Link" href={props.href}>
      {props.title}
    </a>
  );
}

function SupportText(props) {
  return <div className="SupportLine__Item SupportLine__Item_Text">{props.title}</div>;
}

export default function SupportLine() {
  return (
    <div className="SupportLine">
      <SupportLink href="https://yandex.ru/support/mail/" title="Помощь и обратная связь" />
      <SupportLink href="https://yandex.ru/adv/" title="Реклама" />
      <SupportText title="© 2001&mdash;2019," />
      <SupportLink href="https://yandex.ru" title="&nbsp;Яндекс" />
    </div>
  );
}
