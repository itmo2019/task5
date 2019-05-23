const MONTH = ['янв', 'фев', 'март', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
export const FIVE_MIN = 60 * 5 * 1000;
export const MESSAGES_LIMIT = 30;

const senders = ['Принц Рашид', 'Спортлото', 'Дальний родственник', 'Димас', 'Физрук', 'IBM'];

export const getRandomInt = limit => {
  return Math.floor(Math.random() * (Math.floor(limit) + 1));
};

function getRandomSender() {
  return senders[getRandomInt(senders.length - 1)];
}

async function getRandomThemeAndText() {
  const responseText = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
  const responseTheme = await fetch('https://baconipsum.com/api/?type=meat-and-filler&sentences=1');
  const dataText = await responseText.json();
  const dataTheme = await responseTheme.json();
  return [dataTheme[0], dataText[0]];
}

export const getLocalDate = () => {
  const date = new Date();
  return `${date.getDate()} ${MONTH[date.getMonth()]}`;
};

export async function getRandomMail() {
  const senderName = getRandomSender();
  const logo = senderName[0];
  const [title, text] = await getRandomThemeAndText();
  return { logo: logo, sender: senderName, title: title, text: text };
}


export class MailState {
  constructor(logo, sender, title, time, text) {
    this.logo = logo;
    this.sender = sender;
    this.title = title;
    this.time = time;
    this.text = text;
    this.justAdded = true;
    this.toDelete = false;
  }
}
