import randomInteger from '../random-integer'

import Anonymous from '../../resources/img/anonymous.svg';
import Munch from '../../resources/img/munch.png';
import Maggritte from '../../resources/img/magritte.png';

const senders = [
  'Антоша',
  'Брат моего брата',
  'Врач без пациентов',
  'Вспыльчивый человек',
  'Гайка № 6',
  'Гайка №9',
  'Numeric Master'
];

const avatars = [Anonymous, Munch, Maggritte];
const month = ['янв', 'фев', 'март', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

function buildMail(letterId) {
  const year = randomInteger(100, 2019);

  function getDate() {
    const temp = new Date();
    return `${temp.getDate()} ${month[temp.getMonth()]}`;
  }

  function getSender() {
    return senders[randomInteger(0, senders.length - 1)];
  }

  function getAvatar() {
    return avatars[randomInteger(0, avatars.length - 1)];
  }

  function getTitle() {
    switch (randomInteger(0, 2)) {
      case 0:
        return `В ${year} нужно всего лишь...`;
      case 1:
        return `А ты знал что в ${year} году...`;
      default:
        return `Раз в ${year} происходит...`;
    }
  }

  const sender = getSender();
  const avatar = getAvatar();

  return {
    id: letterId,
    sender,
    avatar,
    receiveTime: getDate(),
    title: getTitle(year),
    text: 'Loading...',
    unread: true
  };
}

export default buildMail;
