export function generateContentPreview() {
  return 'Not so big content';
}

export function generateContent() {
  if (Math.random() > 0.8) {
    return '<div> <img src="https://cs8.pikabu.ru/post_img/big/2016/12/28/1/1482881197192578721.jpg" height=300px> </div> Это котик.';
  }
  return 'Some text to fullfill the content of the fake message from strange author';
}

export function generateDateTime() {
  return '2019-08-06';
}

export function generateTheme() {
  return `BIG THEME ${new Date()}`;
}

export function generateAuthor() {
  const letter = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase();

  return (
    letter.charAt(Math.round(Math.random() * letter.length)) +
    letter.charAt(Math.round(Math.random() * letter.length))
  );
}

function GeneratorFreeMessageIdFactory(indicies) {
  const free = new Set([0, 1, 2, 3, 4, 5, 6]);
  let cnt = 7;

  indicies.forEach(value => free.delete(value));

  this.generateFreeId = () => {
    const result = free.values().next().value;
    free.delete(result);
    if (free.size === 0) {
      for (let i = cnt; i < cnt + cnt; ++i) {
        free.add(i);
      }
      cnt *= 2;
    }
    return result;
  };

  this.freeId = id => {
    free.add(id);
  };
}

export const generateFreeMessageId = new GeneratorFreeMessageIdFactory([0]);

function throttle(time, callback) {
  let busy = false;
  return () => {
    if (!busy) {
      callback();
      busy = true;
      setTimeout(() => {
        busy = false;
      }, time + Math.random() * 5000);
    }
  };
}

const periodicReceiveMessage = throttle(5000 * 60, () => {});

const intervalId = setInterval(() => {
  periodicReceiveMessage();
}, 1000);
