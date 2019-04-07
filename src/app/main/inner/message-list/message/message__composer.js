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

export function randomizeArrayNumber(text) {
  return Math.floor(Math.random() * text.length);
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

export default async function composer() {
  const text = `<div class="message message_not-read" id="message__id">
                  <label>
                    <input class="checkbox checkbox_message" type="checkbox" />
                  </label>
                  <label for="message-list__cutter" onclick="formMessagePage(this)">
                    <img class="message__logo" src="./message__logo-${randomizeNumber(0, 3)}.png" />
                    <div class="message__contact">${randomizeAuthor}</div>
                    <div class="message__read-icon"></div>
                    <div class="message__subject">${await randomizeText()}</div>
                    <div class="message__date">${randomizeDate()}</div>
                  </label>
                </div>
                <hr class="hr" />`;
  return text;
}

// async function composer2() {
//     let mail = document.getElementById("message__template");
//     let backup = mail.cloneNode();
//     document.getElementById("message__template").querySelector("message__logo").setAttribute('src', "body/main/inner/message-list/message/message__logo-"+randomizeNumber(0, 3)+".png");
//     document.getElementById("message__template").querySelector(".message__contact").innerHTML = messageContact[randomizeArrayNumber(messageContact)];
//     // ' + messageContact[randomizeArrayNumber(messageContact)] + '
//     document.getElementById("message__template").querySelector(".message__subject").innerHTML = await randomizeText();
//     // ' + randomizeText(messageTextArray) + '
//     document.getElementById("message__template").querySelector(".message__date").innerHTML = randomizeDate();
//     // ' + randomizeDate() + '
//     let result = mail.innerHTML;
//     mail = backup;
//     return result;
// }
