import { getRandomTimeout } from './random';
import { parseText } from './parser';

export default class MessageSender {
  constructor(setMessage) {
    this.setMessage = setMessage;
  }

  async run() {
    await new Promise((resolve) => {
      setTimeout(async () => {
        await this.getMail();
        resolve();
      }, getRandomTimeout(MessageSender.minDelay, MessageSender.maxDelay));
    });
  }

  async getMail() {
    await this.newMail();
    await new Promise(resolve => {
      setTimeout(async () => {
        await this.getMail();
        resolve();
      }, getRandomTimeout(MessageSender.interval, MessageSender.maxDelay));
    });
  }

  async newMail() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const endpointRandom =
      'https://en.wikipedia.org/w/api.php?action=query&list=random&utf8=&format=json&rnlimit=1&rnnamespace=0&prop=info';
    const endpointPage =
      'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text|images|links&pageid=';
    const imagePath = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

    const randomPageIdRaw = await fetch(proxyUrl + endpointRandom);
    const randomPageId = await randomPageIdRaw.json();
    const id = randomPageId.query.random[0].id;
    const randomPageRaw = await fetch(proxyUrl + endpointPage + id);
    const randomPage = await randomPageRaw.json();

    const name = randomPage.parse.title;
    const text = parseText(randomPage.parse.text['*']);
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}`;
    let avatarSrc = '';
    if (randomPage.parse.images.length > 0) {
      avatarSrc = imagePath + randomPage.parse.images[0];
    }

    this.setMessage({
      sent: false,
      isRead: false,
      avatarSrc: avatarSrc,
      name: name,
      text: text,
      time: time,
      deleteAnim: false
    });
  }
}

MessageSender.minDelay = 10;
/* 10 mins */
MessageSender.maxDelay = 600000;
/* 5 mins */
MessageSender.interval = MessageSender.maxDelay / 2;
