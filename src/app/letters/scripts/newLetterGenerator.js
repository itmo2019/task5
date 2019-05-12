const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const lastNames = ['Александр', 'Марк', 'Георгий', 'Артемий'
  , 'Дмитрий', 'Константин', 'Давид', 'Эмиль'
  , 'Максим', 'Тимур', 'Платон', 'Назар'
  , 'Сергей', 'Олег', 'Анатолий', 'Савва'
  , 'Андрей', 'Ярослав', 'Григорий', 'Ян'
  , 'Алексей', 'Антон', 'Демид', 'Рустам'
  , 'Артём', 'Николай', 'Данила', 'Игнат'
  , 'Илья', 'Глеб', 'Станислав', 'Влад'];

const first_names = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков',
  'Фёдоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Козлов', 'Степанов',
  'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров'];

const getRandomText = async (paras) => {
  const text = await fetch(
    `https://baconipsum.com/api/?type=meat-and-filler&formaat=json&paras=${paras}`
  );
  return text.json();
};

export const newMail = async (letters) => {

  const id = letters.state.nextLetterId;
  letters.setState(state => {
    return { nextLetterId: state.nextLetterId + 1 };
  });

  const text = await getRandomText(4);

  const from = first_names[Math.floor(Math.random() * (first_names.length - 1))]
    + ' '
    + lastNames[Math.floor(Math.random() * (lastNames.length - 1))];

  const date = (Math.floor(Math.random() * 29)) + ' ' + months[Math.floor(Math.random() * 11)] + '.';

  const theme = await getRandomText(1);

  const updatedCheckedLetters = letters.state.checkedLetters;
  updatedCheckedLetters[id] = false;

  letters.setState(state => {
    return {
      letters: [
        {
          id: id,
          text: text,
          from: from,
          date: date,
          theme: theme,
          isChecked: false,
          isVisible: letters.state.letters.length <= 30
        },
        ...state.letters
      ],
      checkedLetters: updatedCheckedLetters
    };
  });
};
