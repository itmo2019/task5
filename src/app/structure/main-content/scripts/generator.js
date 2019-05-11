const companies = ['ebay', 'facebook', 'live', 'yandex', 'live', 'reddit', 'twitter', 'youtube'];
const topic = [
  'Внимание!',
  'Добро пожаловать!',
  'Обновление',
  'Получите приз!',
  'Восстановление аккаунта',
  'Ищем сотрудников',
  'Спасибо за отзыв'
];
const hello = ['Здравствуйте!', 'Добрый день!', 'Привет!', 'Приветствую!', 'Салют!'];
const word1 = ['Я', 'Меня зовут', 'Это'];
const firstName = ['Виталий', 'Андрей', 'Владимир', 'Алексей', 'Артём', 'Антон'];
const secondName = [
  'Соболев',
  'Чиркин',
  'Борисов',
  'Орехов',
  'Гаврилов',
  'Иванов',
  'Сергеев',
  'Онегин'
];
const phrase1 = [
  'Так вышло, что',
  'Нам стало известно, что',
  'Сообщаем вам, что',
  'Как вы могли заметить,',
  'С сегоднящнего дня'
];
const nouns1 = ['эксперт', 'редактор', 'программист', 'рабочий'];
const verbs = [
  'взломал',
  'проверил',
  'удалил',
  'исправил',
  'закрыл',
  'заметил',
  'пометил',
  'пересмотрел',
  'передал'
];
const nouns2 = ['счет', 'аккаунт', 'пароль', 'кабинет'];
const adjectives = [
  'идеальный',
  'прямой',
  'обратный',
  'наш',
  'постоянный',
  'великолепный',
  'исключительный',
  'личный',
  'ваш'
];

export function randomInt(min, max) {
  return Math.floor((max - min) * Math.random() + min);
}

function randFromList(list) {
  return list[randomInt(0, list.length)];
}

export const randomDate = () => {
  const m = randomInt(1, 12);
  let day = randomInt(1, 30);
  if (m === 2) day = Math.min(28, day);
  const month = [
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
  return `${String(day)} ${String(month[m - 1])}`;
};

export const generateText = sender => {
  const textContent = [
    `${randFromList(hello)} ${randFromList(word1)} ${randFromList(firstName)} ${randFromList(
      secondName
    )}, глава компании ${sender.toUpperCase()}.`
  ];
  textContent.push(
    `${randFromList(phrase1)} ${randFromList(adjectives)} ${randFromList(nouns1)} ${randFromList(
      verbs
    )} ${randFromList(adjectives)} ${randFromList(nouns2)}.`
  );
  return textContent;
};

export const randomSender = () => {
  return randFromList(companies);
};

export const randomTopic = () => {
  return randFromList(topic);
};

function createLetter() {
  const letter = document.createElement('li');
  letter.className = 'main-block__letter animation-insert';
  letter.setAttribute('data-method-click', 'clicked');
  const clone = document.getElementById('template-letter').content.cloneNode(true);
  const sender = randFromList(companies);
  clone.querySelector('img').src = `img/icons/${sender}.png`;
  clone.querySelector('.main-block__mail-from').textContent = sender.toUpperCase();
  clone.querySelector('.main-block__topic').textContent = randFromList(topic);
  randomDate(clone.querySelector('time'));
  generateText(clone.querySelector('.main-block__letter-content'), sender);
  letter.append(clone);
  return letter;
}

function hideLetters() {
  // if (count <= LETTERS_ON_PAGE) return;
  // const letters = document.getElementById('all-letters').querySelectorAll('li');
  // for (let i = LETTERS_ON_PAGE; i < letters.length; i++) {
  //   letters[i].style.display = 'none';
  //   letters[i].querySelector('.check').checked = false;
  // }
}

function removeClass(letter, name) {
  letter.classList.remove(name);
}

function newMail() {
  // count++;
  // console.log(`add:${count}`);
  document.querySelector('.check').checked = false;
  const allLetters = document.getElementById('all-letters');
  const newLetter = createLetter();
  allLetters.insertBefore(newLetter, allLetters.querySelectorAll('li')[0]);
  // if (!isOpen) allLetters.classList.add('all-letter-down');
  newLetter.addEventListener('webkitAnimationEnd', () => {
    removeClass(newLetter, 'animation-insert');
  });
  allLetters.addEventListener('webkitAnimationEnd', () => {
    removeClass(allLetters, 'all-letter-down');
  });
  // if (!isOpen) {
  //   hideLetters();
  // }
}

function checkVisibility() {
  // const letters = document.getElementById('all-letters').querySelectorAll('li');
  // for (let i = 0; i < Math.min(letters.length, LETTERS_ON_PAGE); i++) {
  //   letters[i].style.display = 'block';
  // }
}

function removeLetters() {
  // if (isOpen) return;
  // console.log(`remove:${count}`);
  document.body.querySelector('.check').checked = false;
  const letters = document.getElementById('all-letters').querySelectorAll('li');
  letters.forEach(letter => {
    if (letter.querySelector('.check').checked) {
      letter.classList.add('animation-delete');
      letter.addEventListener('webkitAnimationEnd', function() {
        removeClass(letter, 'animation-delete');
        // count--;
        letter.remove();
        checkVisibility();
      });
    }
  });
}


// function displayNone(obj) {
//   obj.style.display = 'none';
// }
//
// function displayBlock(obj) {
//   obj.style.display = 'block';
// }
//
// function openLetter(event) {
//   let target = event.target;
//   console.log(target);
//   if (
//     target.tagName !== 'INPUT' &&
//     target.type !== 'checkbox' &&
//     !target.classList.contains('main-block__all-letters')
//   ) {
//     if (target.dataset.closeLetter === 'close') {
//       while (!target.classList.contains('main-block__letter')) {
//         target = target.parentElement;
//       }
//       isOpen = false;
//       hideLetters();
//       displayNone(target.querySelector('.main-block__letter-content'));
//       displayBlock(target.querySelector('div'));
//     } else {
//       // open
//       while (!target.classList.contains('main-block__letter')) {
//         target = target.parentElement;
//       }
//       isOpen = true;
//       _displayNone(target.querySelector('div'));
//       _displayBlock(target.querySelector('.main-block__letter-content'));
//     }
//   }
//   console.log(target);
// }

// document.getElementById('all-letters').addEventListener('click', openLetter);
// document.getElementById('get-letter').addEventListener('click', newMail);
// document.getElementById('remove').addEventListener('click', removeLetters);
// document.querySelector('.check').addEventListener('click', selectAll);
