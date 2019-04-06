import React from 'react';

import MailsHeader from '../mails-header';
import MailsFooter from '../mails-footer';
import Mail from '../mail';

import Article0 from '../specific/article0';
import Article1 from '../specific/article1';

import YandexAvatar from '../../resources/avatar.png';

import './mails-maintainance.css';

export default class MailsMaintainance extends React.Component {
    constructor(props) {
        super(props)

        this.mailsPerPage = 30

        this.emptyArticle = <div>
                                <p>Текст письма не завезли.</p> 
                                <p>Покупайте наших слонов!</p>
                            </div>
        
        this.mailCounter = 0
        this.requestsCounter = 0
        this.mailSelected = new Map()
        this.mailSetSelection = new Map()

        var that = this;
        ['newEmptyYandexMail', 'newYandexMail', 'deleteSelected', 'toggleSelectAll', 
         'constructMailOnPage', 'receiveMail', 'newMailTimeoutSetup', 'modifyFirst',
         'modifyAll', 'modifyOne'].forEach(func => {
             that[func] = that[func].bind(that)
         })

        this.newMailTimeoutSetup(); 

        this.state = { mailSet: [
                                    this.newYandexMail(false, "Яндекс.Паспорт", "Доступ к аккаунту восстановлен", "6 авг", <Article0 />),
                                    this.newEmptyYandexMail(false, "Команда Яндекс.Почты", "Как читать почту с мобильного", "6 июл"),
                                    this.newEmptyYandexMail(true, "Команда Яндекс.Почты", "Как читать почту с мобильного", "6 июл"),
                                    this.newEmptyYandexMail(true, "Яндекс", "Соберите всю почту в этот ящик", "6 июл")
                                ]
        }
    }

    render() {
        return  <div className="MailsMaintainance">
                    <MailsHeader 
                        callbacks={{
                            deleteCallback: this.deleteSelected, 
                            receiveCallback: this.receiveMail}} 
                        selectCallback={this.toggleSelectAll} />
                    {this.state.mailSet
                        .slice(0, this.mailsPerPage)
                        .map(props => <Mail {...props} />)}
                    <div className="MailsMaintainance__Pillar"></div>
                    <div className="MailsMaintainance__MailsFooterWrapper">
                        <MailsFooter />
                    </div>  
                </div>
    }

    toggleSelectAll(checked) {
        this.state.mailSet
            .slice(0, this.mailsPerPage)
            .forEach(m => this.mailSetSelection.get(m.mailID)(checked))
    }

    modifyAll(action, func) {
        this.setState(state => {return {mailSet: state.mailSet[action](func)}})
    }
    modifyFirst(n, action, func) {
        this.setState(state => {return {mailSet: state.mailSet
                                                    .slice(0, n)[action](func)
                                                    .concat(state.mailSet.slice(n))}})
    }
    modifyOne(id, action, func) {
        var defaultElm = action === "map" ? mail => mail : _ => false
        this.modifyAll(action, mail => ((mail.mailID === id) ? func(mail) : defaultElm(mail)))
    }

    deleteSelected() {
        this.modifyAll("map", mail => {
            if (this.mailSelected.get(mail.mailID)) {
                mail.classList.add("MailTitle_toDelete")
            }
            return mail
        })
        setTimeout(() => 
            this.modifyAll("filter", mail => !this.mailSelected.get(mail.mailID))
        , 200)
    }

    newMail(isRead, avatar, sender, title, date, article, classList) {
        if (classList === undefined) {
            classList = new Set()
        }
        classList.add("MailTitle")
        if ("" + isRead === "true") {
            classList.add("MailTitle_Read")
        } else {
            classList.add("MailTitle_Unread")
        }
        
        var newID = "mail-id" + this.mailCounter++;
        return {
            callbacks: {
                selected: checked => this.mailSelected.set(newID, checked),
                setSelect: callback => this.mailSetSelection.set(newID, callback)},
            mailID: newID,
            sender: sender, 
            title: title,
            avatar: avatar,
            date: date,
            article: article,
            classList: classList
        }
    }

    newYandexMail(isRead, sender, title, date, article) {
        return this.newMail(isRead, YandexAvatar, sender, title, date, article)
    }

    newEmptyYandexMail(isRead, sender, title, data) {
        return this.newYandexMail(isRead, sender, title, data, this.emptyArticle);
    }

    constructMailOnPage(title, article) {
        var mail = this.newMail(false, null, "mysterious stranger", title, this.getDate(), <Article1 body={article} />, 
            new Set(['MailTitle_fromDelete']))
        var mailID = mail.mailID;
        this.setState(state => {return {mailSet: [mail].concat(state.mailSet)}})
        setTimeout(() => this.modifyOne(mailID, "map", mail => {mail.classList.add('MailTitle_toAppear'); return mail}), 50)
        setTimeout(() => this.modifyOne(mailID, "map", mail => {
            mail.classList.delete("MailTitle_fromDelete");
            mail.classList.delete("MailTitle_toAppear");
            return mail
        }), 250)
    }

    month = ['янв.', 'фев.', 'март.', 'апр.', 'май.', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
    getDate() {
        var temp = new Date();
        return temp.getDate() + ' ' + this.month[temp.getMonth()];                
    }  

    newMailTimeoutSetup() {
        setTimeout(() => {
            this.receiveMail(); 
            this.newMailTimeoutSetup()
        }, (Math.random() + 1) * 5*60*1000);
    }

    receiveMail() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://numbersapi.com/${this.requestsCounter}`, true);
        xhr.send();
        var that = this
        var numberTopic = this.requestsCounter++
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== xhr.DONE) {return} 
            if (xhr.status !== 200) {
                that.constructMailOnPage("Что говорить, когда нечего говорить?", "Нет соединения. Inception - ЧБУ YouTube");
            } else {
                that.constructMailOnPage(`Did ya know?.. About ${numberTopic}`, xhr.responseText);
            }
        }  
    }
}
