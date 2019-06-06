import generateText from './text-generator';
import generateUser from './user-generator';
import random from './random';

export function generateLetter() {
  return {
    user: generateUser(),
    content: {
      subject: generateText(1, 1),
      body: generateText(random.int(4, 5), random.int(5, 10))
    },
    date: new Date()
  };
}
