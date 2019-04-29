// const MAX_MESSAGES = 30;
//
// const messagesListNode = document.querySelector('.messages-list');
// const messageSnippetNode = document
//   .querySelector('.messages-list__message-snippet')
//   .cloneNode(true);
//
// function httpGETRequest(url) {
//   const xmlHttp = new XMLHttpRequest();
//   const proxyurl = 'https://cors-anywhere.herokuapp.com/';
//   try {
//     let cnt = 0;
//     do {
//       xmlHttp.open('GET', proxyurl + url, false);
//       xmlHttp.send(null);
//       cnt++;
//     } while (cnt < 10 && xmlHttp.status !== 200);
//     if (xmlHttp.status !== 200) {
//       return null;
//     }
//   } catch (e) {
//     return null;
//   }
//   return xmlHttp.responseText;
// }
//
// function generateMessage() {
//   const newMessage = new Object();
//   let response = httpGETRequest(
//     'https://ru.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&prop=extracts&exintro&explaintext&grnlimit=1'
//   );
//   if (response == null) {
//     newMessage.topic = 'Доступ к аккаунту восстановлен';
//     newMessage.content = 'Поздравляем! Доступ к вашему аккаунту был успешно восстановлен.';
//     return newMessage;
//   }
//   response = JSON.parse(response);
//   const article = response.query.pages[Object.keys(response.query.pages)[0]];
//   newMessage.topic = article.title;
//   newMessage.content = article.extract;
//   return newMessage;
// }
//
// function getMachineTime(time) {
//   const format = function(n) {
//     return n < 10 ? '0' + n : '' + n;
//   };
//   return time.getFullYear() + '-' + format(time.getMonth() + 1) + '-' + format(time.getDate());
// }
//
// function getNewMessage() {
//   const messageObj = generateMessage();
//   const newMessageNode = messageSnippetNode.cloneNode(true);
//   const now = new Date();
//   const avatars = ['google.png', 'fb.png', 'insta.png', 'idea.png', 'twitter.png', 'ya-default.svg'];
//   const names = ['Google', 'Facebook', 'Instagram', 'IntelliJ Idea', 'Twitter', 'Яндекс'];
//   let senderIdx = Math.floor(Math.random() * avatars.length);
//   newMessageNode
//     .querySelector('.message-snippet__avatar')
//     .setAttribute('src', 'static/avatars/' + avatars[senderIdx]);
//   newMessageNode.querySelector('.message-snippet__sender-name').innerHTML = names[senderIdx];
//   newMessageNode.querySelector('.message-snippet__message-topic').innerHTML = messageObj.topic;
//   const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сент', 'окт', 'ноя', 'дек'];
//   const date = newMessageNode.querySelector('.message-snippet__message-time');
//   date.innerHTML = now.getDate() + ' ' + months[now.getMonth()];
//   date.setAttribute('datetime', getMachineTime(now));
//   messageObj.node = newMessageNode;
//   return messageObj;
// }
//
// export function newMail() {
//   const newMessageObj = getNewMessage();
//   newMessageObj.node
//     .querySelector('.message-clickable-area')
//     .addEventListener('click', messageClickAction);
//   messages.push(newMessageObj);
//   newMessageObj.node.classList.add('message_snippet_start_adding');
//   messagesListNode.insertBefore(newMessageObj.node, messagesListNode.firstElementChild);
//   if (messages.length > MAX_MESSAGES) {
//     messagesListNode.lastElementChild.remove();
//   }
//   let triggerAnimation = function() {
//     newMessageObj.node.classList.add('message_snippet_added');
//   };
//   setTimeout(triggerAnimation, 0);
// }
