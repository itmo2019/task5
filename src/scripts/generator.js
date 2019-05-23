import yandexLogo from '../logos/yandex.png';
import twitterLogo from '../logos/twitter.png';
import skypeLogo from '../logos/skype.png';
import linkedinLogo from '../logos/linkedin.png';
import flickrLogo from '../logos/flickr.png';
import facebookLogo from '../logos/facebook.png';
import behanceLogo from '../logos/behance.png';

const logoMap = [
  ['Yandex', yandexLogo],
  ['Twitter', twitterLogo],
  ['Skype', skypeLogo],
  ['LinkedIn', linkedinLogo],
  ['Flickr', flickrLogo],
  ['Facebook', facebookLogo],
  ['Behance', behanceLogo]
];

const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const xhr = new XMLHttpRequest();
let out;

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getFishText(type, number) {
  const params = `&type=${type}&format=html&number=${number}`;

  xhr.open('GET', `https://fish-text.ru/get?${params}`, false);

  xhr.onload = function() {
    out = this.responseText;
  };

  xhr.send();
}

export function generateEmail() {
  const id = new Date().getTime();
  const i = Math.floor(Math.random() * (logoMap.length - 1));
  const logo = logoMap[i][1];
  const title = logoMap[i][0];
  getFishText('title', 1);
  const preview = out.substr(4, out.length - 9);
  const generatedDate = randomDate(new Date(2012, 0, 1), new Date());
  const date = `${generatedDate.getDate()} ${month[generatedDate.getMonth()]}`;
  getFishText('paragraph', Math.floor(Math.random() * 10));
  return {
    id,
    logo,
    title,
    preview,
    date,
    checked: false,
    text: out.replace(/<\/p>/g, '').split('<p>'),
    highlighted: true,
    visible: true
  };
}
