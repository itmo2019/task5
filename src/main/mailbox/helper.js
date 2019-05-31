let mailCnt = 0;

export class Mail {
  constructor(img, author, title, date, text, old, state = 'hidden') {
    this.img = img;
    this.author = author;
    this.title = title;
    this.date = date;
    this.text = text;
    this.old = old;
    this.id = mailCnt++;
    this.state = state;
    this.checked = false;
    this.deleted = false;
  }

  setCheck(value) {
    this.checked = value;
  }

  markDeleted() {
    this.deleted = true;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getAuthor() {
  // Cat names
  const names = [
    'Барсик',
    'Боня',
    'Бакс',
    'Алекс',
    'Бади',
    'Амур',
    'Абуссель',
    'Баксик',
    'Кузя',
    'Персик',
    'Абрек',
    'Абрикос',
    'Тимоша',
    'Авалон',
    'Саймон',
    'Бурбузяка Жабс',
    'Марсик',
    'Абу',
    'Маркиз',
    'Аадон',
    'Дымок',
    'Лаки',
    'Сёма',
    'Симба',
    'Абрамович',
    'Пушок',
    'Айс',
    'Бося',
    'Кекс',
    'Басик',
    'Алмаз',
    'Макс',
    'Гарфилд',
    'Феликс',
    'Том',
    'Тиша',
    'Тишка',
    'Цезарь',
    'Мася',
    'Абакан',
    'Лакки',
    'Васька',
    'Марсель',
    'Адольф',
    'Вася',
    'Бабасик',
    'Зевс',
    'Вольт',
    'Лео',
    'Адидас',
    'Зефир',
    'Максик',
    'Вайс',
    'Барс',
    'Кокос',
    'Рыжик',
    'Мартин',
    'Айс-Крим',
    'Томас',
    'Филя',
    'Нафаня',
    'Дарсик',
    'Марс',
    'Валера',
    'Абориген',
    'Тошка',
    'Базиль',
    'Сосисыч',
    'Абрико',
    'Масик',
    'Абус',
    'Абсент',
    'Умка',
    'Жужа',
    'Веня',
    'Каспер',
    'Грей',
    'Живчик',
    'Убийца мышей',
    'Глюк',
    'Патрик',
    'Оптимус Прайм',
    'Виски',
    'Акакий',
    'Симка',
    'Тёма',
    'Баффи',
    'Аватар',
    'Гаврик',
    'Жан батист Гренуй',
    'Ганс',
    'Вегас',
    'Гаврюша',
    'Авдон',
    'Вин Дизель',
    'Вафлик',
    'Бонни',
    'Снежок',
    'Люцифер',
    'Базилио',
    'Тима',
    'Байрон'
  ];
  return names[getRandomInt(0, names.length)];
}

function getCurrentTime() {
  return new Date().getTime();
}

function getDate() {
  const date = new Date();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  return `${months[monthIndex]} ${day}`;
}

function getImg() {
  return `https://thiscatdoesnotexist.com/?${getCurrentTime()}`;
}

function sendRequest(link) {
  const xhttp = new XMLHttpRequest();
  let res = '';
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      res = xhttp.responseText;
    }
  };
  xhttp.open('GET', link, false);
  xhttp.send();
  return res;
}

function getTitle() {
  return sendRequest(
    'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=0&format=text'
  );
}

function getText() {
  return sendRequest(
    'https://baconipsum.com/api/?type=all-meat&paragraphs=5&start-with-lorem=1&format=text'
  );
}

export function generateMail() {
  return new Mail(getImg(), getAuthor(), getTitle(), getDate(), getText());
}
