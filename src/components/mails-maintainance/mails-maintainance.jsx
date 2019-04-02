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

        this.emptyArticle = <div>
                                <p>Текст письма не завезли.</p> 
                                <p>Покупайте наших слонов!</p>
                            </div>
        
        this.mailCounter = 0
        this.requestsCounter = 0
        this.mailSelected = new Map()
        this.mailSetSelection = new Map()

        this.newEmptyYandexMail  =  this.newEmptyYandexMail.bind(this)
        this.newYandexMail       =       this.newYandexMail.bind(this)
        this.deleteSelected      =      this.deleteSelected.bind(this)
        this.toggleSelectAll     =     this.toggleSelectAll.bind(this)
        this.constructMailOnPage = this.constructMailOnPage.bind(this)
        this.receiveMail         =         this.receiveMail.bind(this)
        this.newMailTimeoutSetup = this.newMailTimeoutSetup.bind(this)

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
                    <MailsHeader callbacks={{deleteCallback: this.deleteSelected, receiveCallback: this.receiveMail}} selectCallback={this.toggleSelectAll} />
                    {this.state.mailSet.map(props => <Mail {...props} />)}
                    <div className="MailsMaintainance__Pillar"></div>
                    <div className="MailsMaintainance__MailsFooterWrapper">
                        <MailsFooter />
                    </div>  
                </div>
    }

    toggleSelectAll(checked) {
        Array.from(this.mailSetSelection.values())
             .forEach(m => m(checked))
    }

    deleteSelected() {
        this.setState({mailSet: this.state.mailSet.map(mail => {
            mail.modifiers = this.mailSelected.get(mail.mailID) ? 'to-delete' : ''
            return mail
        })})
        setTimeout(() => {
            this.setState({mailSet: this.state.mailSet.filter(mail => !this.mailSelected.get(mail.mailID))})
        }, 200)
    }

    newMail(isRead, avatar, sender, title, date, article, modifiers) {
        var newID = "mail-id" + this.mailCounter++;
        return {
            callbacks: {
                selected: checked => this.mailSelected.set(newID, checked),
                setSelect: callback => this.mailSetSelection.set(newID, callback)},
            mailID: newID,
            isRead: "" + isRead,
            sender: sender, 
            title: title,
            avatar: avatar,
            date: date,
            article: article,
            modifiers: modifiers
        }
    }

    newYandexMail(isRead, sender, title, date, article) {
        return this.newMail(isRead, YandexAvatar, sender, title, date, article)
    }

    newEmptyYandexMail(isRead, sender, title, data) {
        return this.newYandexMail(isRead, sender, title, data, this.emptyArticle);
    }

    constructMailOnPage(title, article) {
        var mail = this.newMail(false, null, "mysterious stranger", title, this.getDate(), <Article1 body={article}/>, 'from-delete')
        var mailID = mail.mailID;
        this.setState({mailSet: [mail].concat(this.state.mailSet)})
        setTimeout(() => {
            this.setState({mailSet: this.state.mailSet.map(mail => {
                if (mail.mailID === mailID) {
                    mail.modifiers += ' to-appear' 
                }
                return mail
            })})
        }, 100);
        setTimeout(() => { 
            this.setState({mailSet: this.state.mailSet.map(mail => {
                if (mail.mailID === mailID) {
                    mail.modifiers = '' 
                }
                return mail
            })})
        }, 300);
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
        if (this.state.mailSet.map(m => 1).reduce((x, y) => x + y) >= 30) {return}
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `http://numbersapi.com/${this.requestsCounter}`, true);
        xhr.send();
        var that = this
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== xhr.DONE) {return} 
            if (xhr.status !== 200) {
                that.constructMailOnPage("Что говорить, когда нечего говорить?", "Нет соединения. Inception - ЧБУ YouTube");
            } else {
                that.constructMailOnPage(`Did ya know?.. About ${that.requestsCounter}`, xhr.responseText);
                that.requestsCounter++;
            }
        }  
    }
}
