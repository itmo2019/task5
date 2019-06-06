import random from './random';

const names = {
  firstNames: ['Богдан', 'Виктор', 'Елисей', 'Ринат', 'Сидор', 'Фёдор'],
  lastNames: ['Иванов', 'Смирнов', 'Кузнецов', 'Васильев', 'Петров', 'Михайлов', 'Федоров']
};

function randomName() {
  const firstName = random.element(names.firstNames);
  const lastName = random.element(names.lastNames);

  return `${firstName} ${lastName}`;
}

function randomImgUrl() {
  return `https://randomuser.me/api/portraits/men/${random.int(0, 100)}.jpg`;
}

function imageOrNull() {
  return random.boolean() ? randomImgUrl() : null;
}

export default function generateUser() {
  return {
    name: randomName(),
    imageUrl: imageOrNull()
  };
}
