const MONTH = ['янв', 'фев', 'март', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
export const FIVE_MIN = 60 * 5 * 1000;
export const MAIL_BOX_LIMIT = 30;

export const MAIL_CONTENT_TEMPLATE = [
  {
    logo: 'yaLogo',
    sender: 'Команда Яндекс.Спам',
    title: 'Новый Спам',
    text: 'Поздравляю!\nВы получили новый спам!\n\nС уважением, команда Яндекс.Спам.'
  },
  {
    logo: 'googleLogo',
    sender: 'Gmail team',
    title: 'Job offer',
    text: `
    Dear Developer!
    We've seen you implementation of 'Yandex.Mail' and we really impressed!
    So we decided to offer you a job in gmail.
    Best wishes,
    Google`
  },
  {
    logo: 'appleLogo',
    sender: 'Apple Store',
    title: 'Встречайте невероятно мощный iMac',
    text:
      'В новом iMac прекрасно всё. Тонкий корпус, великолепный дисплей Retina, более быстрые процессоры и память, потрясающая графика. iMac стал мощнее — во всех отношениях.'
  },
  {
    logo: 'beryLogo',
    sender: 'Беру',
    title: 'Подарки на 8 марта',
    text: `Здравствуйте!
      Сезон подарков продолжается. А мы, как обычно, помогаем вам не утонуть в океане товаров. На одной странице собрали всё, что будет приятно получить вашим близким. Тут и бытовая техника, и товары для спорта, и духи, и помады. Осталось только выбрать.`
  },
  {
    logo: 'beryLogo',
    sender: 'Беру',
    title: 'С Беру Бонусами дешевле',
    text: `Здравствуйте!

    Мы приготовили для вас лучшие товары со скидкой этой недели:
    капсулы для стирки Tide 3 in 1, -32%
    молочная смесь Nutrilon 3 Premium, -40%
    постельное белье La Noche del Amor, -33%
    портативная акустика Marshall Woburn, -26%
    И не забывайте, что с Беру Бонусами цены будут ещё ниже — их можно применять даже на товары со скидками. Приятных покупок!`
  },
  {
    logo: 'appleLogo',
    sender: 'Apple Store',
    title: 'iPhone XS и iPhone XS Max уже в продаже.',
    text:
      'Дисплей Super Retina в двух размерах, один из которых стал самым большим в истории iPhone. Ещё более быстрый Face ID. Самый мощный и умный процессор iPhone. Потрясающая двойная камера. И новый уровень защиты от воды.*'
  },
  {
    sender: 'Niyaz Nigmatullin',
    title: 'Отчисление',
    text: 'Вынужден сообщить, что вы все отчислены.'
  }
];

export const getRandomInt = (limit) => {
  limit = Math.floor(limit);
  return Math.floor(Math.random() * (limit + 1));
}

export const getLocalDate = () => {
  let date = new Date();
  return date.getDate() + ' ' + MONTH[date.getMonth()];
}

export const getRandomMail = () => {
  return MAIL_CONTENT_TEMPLATE[getRandomInt(MAIL_CONTENT_TEMPLATE.length - 1)];
}
