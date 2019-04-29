// const MAX_MESSAGES = 30;
//
// const messagesListNode = document.querySelector('.messages-list');
// const messageSnippetNode = document
//   .querySelector('.messages-list__message-snippet')
//   .cloneNode(true);
// const articleContentNode = document.querySelector('.article__content');
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
// function newMail() {
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
//
// function getMachineTime(time) {
//   let format = function(n) {
//     return n < 10 ? '0' + n : '' + n;
//   };
//   return time.getFullYear() + '-' + format(time.getMonth() + 1) + '-' + format(time.getDate());
// }
//
// function getNewMessage() {
//   messageObj = generateMessage();
//   let newMessageNode = messageSnippetNode.cloneNode(true);
//   let now = new Date();
//   avatars = ['google.png', 'fb.png', 'insta.png', 'idea.png', 'twitter.png', 'ya-default.svg'];
//   names = ['Google', 'Facebook', 'Instagram', 'IntelliJ Idea', 'Twitter', 'Яндекс'];
//   let senderIdx = Math.floor(Math.random() * avatars.length);
//   newMessageNode
//     .querySelector('.message-snippet__avatar')
//     .setAttribute('src', 'static/avatars/' + avatars[senderIdx]);
//   newMessageNode.querySelector('.message-snippet__sender-name').innerHTML = names[senderIdx];
//   newMessageNode.querySelector('.message-snippet__message-topic').innerHTML = messageObj.topic;
//   months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сент', 'окт', 'ноя', 'дек'];
//   date = newMessageNode.querySelector('.message-snippet__message-time');
//   date.innerHTML = now.getDate() + ' ' + months[now.getMonth()];
//   date.setAttribute('datetime', getMachineTime(now));
//   messageObj.node = newMessageNode;
//   return messageObj;
// }
//
// function getChildIndex(node) {
//   if (node.tagName.toLowerCase() != 'li') {
//     return null;
//   }
//   let p = node.parentNode;
//   if (p == null) {
//     console.log(node);
//   }
//   let idx = p.childElementCount - 1;
//   while (node.nextElementSibling != null) {
//     node = node.nextElementSibling;
//     idx--;
//   }
//   return idx;
// }
//
// function setActionHandler(className, listener) {
//   let triggers = document.querySelectorAll('.' + className);
//   triggers.forEach(function(cur) {
//     cur.addEventListener('click', listener);
//   });
// }
//
// function messageClickAction() {
//   const idx = getChildIndex(this.parentNode);
//   articleContentNode.innerHTML = messages[messages.length - 1 - idx].content;
// }
//
// let messages = [];
//
// document.querySelectorAll('.messages-list__message-snippet').forEach(function(cur) {
//   messageObj = new Object();
//   messageObj.node = cur;
//   messageObj.topic = 'Доступ к аккаунту восстановлен';
//   messageObj.content = 'Поздравляем! Доступ к вашему аккаунту был успешно восстановлен.';
//   messages.push(messageObj);
// });
//
// setActionHandler('mail-box__select-all', function() {
//   isChecked = document.querySelector('.mail-box__select-all input').checked;
//   let messageTicks = document.querySelectorAll('.message-snippet__message-tick');
//   messageTicks.forEach(function(cur) {
//     cur.checked = isChecked;
//   });
// });
//
// setActionHandler('mail-box__delete', function() {
//   let selectedMessages = document.querySelectorAll('.message-snippet__message-tick:checked');
//   const startSize = messages.length;
//   const deletingCnt = selectedMessages.length;
//   if (deletingCnt == 0) {
//     return;
//   }
//   selectedMessages.forEach(function(currentValue) {
//     currentValue.parentNode.classList.add('messages-list__message-snippet_deleted');
//   });
//   let deletedMessages = document.querySelectorAll('.messages-list__message-snippet_deleted');
//   setTimeout(
//     function(deletedMessages) {
//       deletedMessages.forEach(function(cur) {
//         idx = getChildIndex(cur);
//         messages.splice(messages.length - 1 - idx, 1);
//         cur.remove();
//       });
//     },
//     500,
//     deletedMessages
//   );
//   if (startSize > MAX_MESSAGES) {
//     let cur = startSize - 1 - MAX_MESSAGES;
//     for (let i = 0; i < deletingCnt && cur >= 0; i++, cur--) {
//       messagesListNode.appendChild(messages[cur].node);
//     }
//   }
//   document.querySelector('.mail-box__select-all input').checked = false;
// });
//
// setActionHandler('message-clickable-area', messageClickAction);
//
// setInterval(newMail, 60 * 1000 * (5 + Math.floor(Math.random() * 5)));
