import logo1 from './message__logo-1.png';
import logo2 from './message__logo-2.png';
import logo3 from './message__logo-3.png';

const messageContact = [
  'Яндекс.Облако',
  'Яндекс.Переводчик',
  'Яндекс.Драйв',
  'Яндекс.Почта',
  'Яндекс.Путешествия',
  'Яндекс.Дзен',
  'Яндекс.Транспорт',
  'Яндекс.Погода',
  'Яндекс.Навигатор',
  'Яндекс.Браузер',
  'Яндекс.Музыка',
  'Яндекс.Алиса'
];

const messageImage = [
  'https://ae01.alicdn.com/kf/HTB13moiPpXXXXXmaXXXq6xXFXXXA/Cammitever-55.jpg_640x640.jpg',
  logo1,
  logo2,
  logo3
];

function randomizeArrayNumber(array) {
  return Math.floor(Math.random() * array.length);
}

export function randomizeImage() {
  return messageImage[randomizeArrayNumber(messageImage)];
}

export function randomizeNumber(from, to) {
  return Math.floor(Math.random() * (to + 1 - from)) + from;
}

export function randomizeDate() {
  const monthArray = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек'
  ];
  const mailDate = randomizeNumber(1, 28);
  const mailMonth = monthArray[randomizeArrayNumber(monthArray)];
  return `${mailDate} ${mailMonth}`;
}

export async function randomizeText() {
  const requestText = await fetch(
    `https://baconipsum.com/api/?type=meat&paras=${randomizeNumber(3, 5)}`
  );
  const resultText = await requestText.json();
  return resultText[0];
}

export function randomizeAuthor() {
  return messageContact[randomizeArrayNumber(messageContact)];
}
