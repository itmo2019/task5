let nextId = 0;

function httpGETRequest(url) {
  const xmlHttp = new XMLHttpRequest();
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  try {
    let cnt = 0;
    do {
      xmlHttp.open('GET', proxyurl + url, false);
      xmlHttp.send(null);
      cnt++;
    } while (cnt < 10 && xmlHttp.status !== 200);
    if (xmlHttp.status !== 200) {
      return null;
    }
  } catch (e) {
    return null;
  }
  return xmlHttp.responseText;
}

async function httpGETRequestAsync(url) {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const response = await fetch(proxyurl + url);
  return await response.text();
}

function getMachineTime(time) {
  const format = function(n) {
    return n < 10 ? `0${n}` : `${n}`;
  };
  return `${time.getFullYear()}-${format(time.getMonth() + 1)}-${format(time.getDate())}`;
}

export function generateMessage() {
  const newMessage = { id: nextId++ };
  const avatars = [
    'google.png',
    'fb.png',
    'insta.png',
    'idea.png',
    'twitter.png',
    'ya-default.svg'
  ];
  const names = ['Google', 'Facebook', 'Instagram', 'IntelliJ Idea', 'Twitter', 'Яндекс'];
  const senderIdx = Math.floor(Math.random() * avatars.length);
  newMessage.senderAvatar = avatars[senderIdx];
  newMessage.senderName = names[senderIdx];
  const now = new Date();
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сент',
    'окт',
    'ноя',
    'дек'
  ];
  newMessage.time = `${now.getDate()} ${months[now.getMonth()]}`;
  newMessage.machineTime = getMachineTime(now);
  newMessage.checked = false;
  newMessage.deleted = false;
  let response = httpGETRequest(
    'https://ru.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&prop=extracts&exintro&explaintext&grnlimit=1'
  );
  if (response == null) {
    newMessage.topic = 'Доступ к аккаунту восстановлен';
    newMessage.content = 'Поздравляем! Доступ к вашему аккаунту был успешно восстановлен.';
    return newMessage;
  }
  response = JSON.parse(response);
  const article = response.query.pages[Object.keys(response.query.pages)[0]];
  newMessage.topic = article.title;
  newMessage.content = article.extract;
  return newMessage;
}
