import React, { Component } from 'react';
import Footer from './footer/footer';
import MailBoxList from './mail-list/mail-list';

import { Mail, generateMail, getCurrentTime, getRandomInt } from './helper';
import './mailbox.css';

const MAX_VISIBLE_MAILS = 30;
const MIN_AUTO_MAIL_INTERVAL = 10;
const MIN_AUTO_MAIL_CONSEQUENT_SPAN_INTERVAL = 3000;
const MAX_AUTO_MAIL_INTERVAL = 6000;

export class MailBox extends Component {
  constructor() {
    super();

    // local non-concurrent data
    this.previousMailTime = 0;
    this.penultimateMailTime = 0;

    // binding methods
    this.updateState = this.updateState.bind(this);
    this.newMail = this.newMail.bind(this);
    this.autoMails = this.autoMails.bind(this);
    this.deleteSelected = this.deleteSelected.bind(this);
    this.updateVisibility = mails => {
      let visibleMails = MAX_VISIBLE_MAILS;
      return mails.map(mail => {
        if (mail.deleted) return mail;

        const newMail = mail;

        if (visibleMails > 0) {
          visibleMails--;
          if (mail.state === 'hidden' || mail.state === 'collapsed') {
            newMail.state = 'appearing';
          }
        } else if (mail.state === 'showed') {
          newMail.state = 'collapsed';
        }

        return newMail;
      });
    };

    this.state = {
      currentMail: 0,
      mails: [
        new Mail(
          'images/owl-face.jpg',
          'Сова',
          'От совы',
          'Mar 9',
          `<h1>Как падают кошки</h1>
            <article>
                <section>
                    Большинство представителей семейства кошачьих имеет склонность к обзору местности с высоты. Крупные лесные кошки-рыси вообше значительную часть времени проводят на деревьях, находясь в засаде или погоне за добычей. А львы и леопарды в саваннах Африки приспособились в жаркое время отдыхать на деревьях, распластавшись на ветках и опустив вниз лапы. Случается, однако, что кошки не удерживаются на высоте и падают. Но и в падении у них есть свои особенности. Многим приходилось наблюдать, как падает обыкновенная кошка, сорвавшись с карниза дома, с дерева или с забора. Сначала она падает к земле головой, спиной или боком, но затем, сделав резкий поворот в воздухе, вывертывается и становится на лапки. И так всегда. Как бы ни падала кошка, приземляется она всегда на лапки и тотчас же может бежать дальше. Такое мгновенное выравнивание положения тела у кошек обеспечивается действием ее вестибулярного аппарата.
                    </section>
                    <img class="article__sova" src="images/sova.png" height="300" class="sova"></img>
                <section>
                При падении кошки вестибулярный аппарат помогает ей осуществить ряд последовательно возникающих рефлексов и приземлиться на лапы. Ненормальное положение тела в пространстве приводит в раздражение отолитовый прибор каналов внутреннего уха кошки. В ответ на это раздражение происходит рефлекторное сокращение мускулов шеи, приводящих голову животного в нормальное положение по отношению к горизонту. Это - первый рефлекс. Сокращение же шейных мышц и постановка шеи при повороте головы являются возбудителем для осуществления другого рефлекса - сокращения определенных мышц туловища и конечностей. В итоге животное принимает правильное положение.
                </section>
                <section>
                    Этот сложный врожденный цепной рефлекс выработался у некоторых животных как приспособление к образу жизни. Ведь животным, особенно из семейства кошачьих, часто приходится во время охоты прыгать и падать с деревьев, скал или со спины своей жертвы. И не будь у них этого приспособительного рефлекса, от них не только ушла бы добыча, но иной раз и самому охотнику пришлось бы пострадать от зубов, рогов или копыт своей жертвы.
                    </section>
                <p>Текст статьи взят с сайта <a href="https://petsi.net/articles/cats/how-cat-comes-down">petsi.net</a></p>
            </article>`,
          false,
          'showed'
        ),
        new Mail(
          'images/cat-face.png',
          'Кот',
          'Старое сообщение',
          'Feb 23',
          'Какое-то старое сообщение',
          true,
          'showed'
        ),
        new Mail(
          'images/spam.png',
          'Неспамнеспамнеспамнеспам',
          'Легкий способ зарабатывать 10000000000 в секунду, нужно всего-лишь...',
          'Jan 1',
          '[Читать продолжение в источнике]',
          false,
          'showed'
        )
      ]
    };

    // initialize automatic generation of mails
    const timeout = getRandomInt(MIN_AUTO_MAIL_INTERVAL, MAX_AUTO_MAIL_INTERVAL);
    setTimeout(this.autoMails, timeout);
  }

  componentDidMount() {
    window.newMail = this.newMail;
  }

  updateState(genState) {
    this.setState(prevState => genState(prevState));
  }

  autoMails() {
    const currentTime = getCurrentTime();
    const timeout = getRandomInt(
      Math.max(
        MIN_AUTO_MAIL_INTERVAL,
        Math.min(currentTime - this.penultimateMailTime, MIN_AUTO_MAIL_CONSEQUENT_SPAN_INTERVAL)
      ),
      MAX_AUTO_MAIL_INTERVAL
    );
    this.penultimateMailTime = this.previousMailTime;
    this.previousMailTime = currentTime + timeout;
    this.newMail();
    setTimeout(this.autoMails, timeout);
  }

  newMail() {
    const newMail = generateMail();
    newMail.state = 'appearing';

    this.updateState(prevState => {
      const { mails, currentMail } = prevState;
      const newMails = mails;
      newMails.unshift(newMail);
      return {
        currentMail,
        mails: this.updateVisibility(newMails)
      };
    });
  }

  deleteSelected() {
    this.updateState(prevState => {
      const { mails, currentMail } = prevState;
      const newMails = mails.map(mail => {
        const newMail = mail;
        if (mail.checked) {
          newMail.state = 'collapsed';
          newMail.markDeleted();
        }
        return newMail;
      });
      return {
        currentMail,
        mails: this.updateVisibility(newMails)
      };
    });
  }

  render() {
    const currentMail = this.state.mails.find(mail => mail.id === this.state.currentMail);
    const mailHTML = currentMail && currentMail.text;

    return (
      <div className="mailbox">
        <div className="mailbox__header">
          <label className="checkbox" htmlFor="checkbox_all">
            <input type="checkbox" className="checkbox__input" id="checkbox_all" />
            <span className="checkbox__span" />
          </label>
          <button className="mailbox__header-element" type="button">
            Переслать
          </button>
          <button className="mailbox__header-element" onClick={this.deleteSelected} type="button">
            Удалить
          </button>
          <button className="mailbox__header-element" type="button">
            Это спам
          </button>
          <button className="mailbox__header-element" type="button">
            Прочитано
          </button>
        </div>

        <input className="mailbox__trigger" type="checkbox" id="mailbox__trigger" />
        <MailBoxList mails={this.state.mails} updateState={this.updateState} />
        <div className="mailbox__mail-contents">
          <label className="mailbox__msg-close" htmlFor="mailbox__trigger">
            <input type="hidden" />×
          </label>
          <div
            className="mail-contents__html"
            // is task requirement
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: mailHTML
            }}
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default MailBox;
