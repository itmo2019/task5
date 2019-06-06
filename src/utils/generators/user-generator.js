import random from './random';

const names = {
  ru: {
    firstNames: [],
    lastNames: []
  },
  en: {
    firstNames: [],
    lastNames: []
  }
};

function randomName() {
  const lang = random.boolean() ? 'ru' : 'en';
  const firstName = random.element(names[lang].firstNames);
  const lastName = random.element(names[lang].lastNames);

  return `${firstName} ${lastName}`;
}

function imageOrNull() {
  return random.boolean() ? 'https://thispersondoesnotexist.com/image' : null;
}

export default function generateUser() {
  return {
    name: randomName(),
    imageUrl: imageOrNull()
  };
}
