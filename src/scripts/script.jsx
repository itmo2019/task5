import sender1 from '../resources/images/stolipin.png';
import sender2 from '../resources/images/stolypin-2.png';
import sender3 from '../resources/images/coat-of-arms.png';

import '../components/letter/letter.css';

const minWordsInLetter = 100;
const maxWordsInLetter = 200;
const minWordsInSentence = 2;
const maxWordsInSentence = 15;

function getRandomFromRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const citations = [
  'Им',
  'нужны',
  'великие',
  'потрясения',
  'нам',
  'нужна',
  'великая',
  'Россия',
  'Родина',
  'требует',
  'себе',
  'служения',
  'настолько',
  'жертвенно',
  'чистого',
  'что',
  'малейшая',
  'мысль',
  'о',
  'личной',
  'выгоде',
  'омрачает',
  'душу',
  'и',
  'парализует',
  'работу',
  'Каждое',
  'утро',
  'когда',
  'я',
  'просыпаюсь',
  'и',
  'творю',
  'молитву',
  'я',
  'смотрю',
  'на',
  'предстоящий',
  'день',
  'как',
  'на',
  'последний',
  'в',
  'жизни',
  'и',
  'готовлюсь',
  'выполнить',
  'все',
  'свои',
  'обязанности',
  'уже',
  'устремляя',
  'взор',
  'в',
  'вечность',
  'А',
  'вечером',
  'когда',
  'я',
  'опять',
  'возвращаюсь',
  'в',
  'свою',
  'комнату',
  'то',
  'говорю',
  'себе',
  'что',
  'должен',
  'благодарить',
  'Бога',
  'за',
  'лишний',
  'дарованный',
  'мне',
  'в',
  'жизни',
  'день',
  'Это',
  'единственное',
  'следствие',
  'моего',
  'постоянного',
  'сознания',
  'близости',
  'смерти',
  'как',
  'расплата',
  'за',
  'свои',
  'убеждения',
  'И',
  'порой',
  'я',
  'ясно',
  'чувствую',
  'что',
  'должен',
  'наступить',
  'день',
  'когда',
  'замысел',
  'убийцы',
  'наконец',
  'удастся',
  'На',
  'очереди',
  'главная',
  'наша',
  'задача',
  'укрепить',
  'низы',
  'В',
  'них',
  'вся',
  'сила',
  'страны',
  'Их',
  'более',
  'миллионов',
  'и',
  'будут',
  'здоровы',
  'и',
  'крепки',
  'корни',
  'у',
  'государства',
  'поверьте',
  'и',
  'слова',
  'Русского',
  'Правительства',
  'совсем',
  'иначе',
  'зазвучат',
  'перед',
  'Европой',
  'и',
  'перед',
  'целым',
  'миром',
  'Дружная',
  'общая',
  'основанная',
  'на',
  'взаимном',
  'доверии',
  'работа',
  'вот',
  'девиз',
  'для',
  'нас',
  'всех',
  'Русских',
  'Дайте',
  'Государству',
  'лет',
  'покоя',
  'внутреннего',
  'и',
  'внешнего',
  'и',
  'вы',
  'не',
  'узнаете',
  'нынешней',
  'ииВерховная',
  'власть',
  'является',
  'хранительницей',
  'идеи',
  'русского',
  'государства',
  'она',
  'олицетворяет',
  'собой',
  'е',
  'силу',
  'и',
  'цельность',
  'и',
  'если',
  'быть',
  'России',
  'то',
  'лишь',
  'при',
  'усилии',
  'всех',
  'сынов',
  'е',
  'охранять',
  'оберегать',
  'эту',
  'Власть',
  'сковавшую',
  'Россию',
  'и',
  'оберегающую',
  'е',
  'от',
  'распада',
  'Самодержавие',
  'московских',
  'Царей',
  'не',
  'походит',
  'на',
  'самодержавие',
  'Петра',
  'точно',
  'так',
  'же',
  'как',
  'и',
  'самодержавие',
  'Петра',
  'не',
  'походит',
  'на',
  'самодержавие',
  'Екатерины',
  'Второй',
  'и',
  'Царя',
  'Освободителя',
  'Ведь',
  'русское',
  'государство',
  'росло',
  'развивалось',
  'из',
  'своих',
  'собственных',
  'русских',
  'корней',
  'и',
  'вместе',
  'с',
  'ним',
  'конечно',
  'видоизменялась',
  'и',
  'развивалась',
  'и',
  'Верховная',
  'Царская',
  'Власть',
  'Нельзя',
  'к',
  'нашим',
  'русским',
  'корням',
  'к',
  'нашему',
  'русскому',
  'стволу',
  'прикреплять',
  'какойто',
  'чужой',
  'чужестранный',
  'цветок',
  'Пусть',
  'расцветет',
  'наш',
  'родной',
  'русский',
  'цвет',
  'пусть',
  'он',
  'расцветет',
  'и',
  'развернется',
  'под',
  'влиянием',
  'взаимодействия',
  'Верховной',
  'Власти',
  'и',
  'дарованного',
  'Ею',
  'нового',
  'представительного',
  'строя',
  'Правительство',
  'должно',
  'избегать',
  'лишних',
  'слов',
  'но',
  'есть',
  'слова',
  'выражающие',
  'чувства',
  'от',
  'которых',
  'в',
  'течение',
  'столетий',
  'усиленно',
  'бились',
  'сердца',
  'русских',
  'людей',
  'Эти',
  'чувства',
  'эти',
  'слова',
  'должны',
  'быть',
  'запечатлены',
  'в',
  'мыслях',
  'и',
  'отражаться',
  'в',
  'делах',
  'правителей',
  'Слова',
  'эти',
  'неуклонная',
  'приверженность',
  'к',
  'русским',
  'историческим',
  'началам',
  'в',
  'противовес',
  'беспочвенному',
  'социализму',
  'Это',
  'желание',
  'это',
  'страстное',
  'желание',
  'обновить',
  'просветить',
  'и',
  'возвеличить',
  'родину',
  'в',
  'противность',
  'тем',
  'людям',
  'которые',
  'хотят',
  'её',
  'распада'
];

function letterReady(letter, expectedCount) {
  return letter.split(' ').length >= expectedCount;
}

function chooseWeighted(arr, weights) {
  const prefixSums = [];
  let sum = weights[0];
  prefixSums.push(sum);
  for (let i = 1; i < weights.length; i++) {
    sum += weights[i];
    prefixSums.push(sum);
  }
  const randomNum = getRandomFromRange(0, sum);
  for (let i = 0; i < prefixSums.length; i++) {
    if (randomNum < prefixSums[i]) {
      return arr[i];
    }
  }
  return arr[prefixSums.length - 1];
}

function addCommas(words) {
  let index = 0;
  const wordsCopy = words;
  while (index < words.length - 2) {
    wordsCopy[index] += ',';
    index += getRandomFromRange(2, 15);
  }
  return wordsCopy;
}

function generateWords() {
  const result = [];
  const count = getRandomFromRange(minWordsInSentence, maxWordsInSentence);
  for (let i = 0; i < count; i++) {
    result.push(citations[getRandomFromRange(0, citations.length - 1)]);
  }
  return result;
}

function checkStarts(s, prefs) {
  for (let i = 0; i < prefs.length; i++) {
    if (s.startsWith(prefs[i])) {
      return true;
    }
  }
  return false;
}

function generateSentence() {
  let words = generateWords();
  words = addCommas(words);
  const punctuationSigns = ['.', '!', '?', '...', ';'];
  const weights = [4, 2, 2, 1, 1];
  words[words.length - 1] += chooseWeighted(punctuationSigns, weights);
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1, words[0].length);
  for (let i = 1; i < words.length; i++) {
    if (!checkStarts(words[i], ['Бог', 'Рос', 'Отеч', 'Петр', 'Екат'])) {
      words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1, words[i].length);
    }
  }
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += `${words[i]} `;
  }
  return result;
}

function generateLetter() {
  const count = getRandomFromRange(minWordsInLetter, maxWordsInLetter);
  let letter = '';
  while (!letterReady(letter, count)) {
    letter += generateSentence();
  }
  return letter;
}

const possibleSenders = [
  'Пётр Аркадиевич Столыпин',
  'Председатель Совета министров Российской империи',
  'Министр внутренних дел Российской империи',
  'статс-секретарь Его Императорского Величества',
  'Яндекс.Столыпин'
];

const senderPics = [sender1, sender2, sender3];

function generateAuthorName() {
  return possibleSenders[getRandomFromRange(0, possibleSenders.length - 1)];
}

function generateAuthorLogo() {
  return senderPics[getRandomFromRange(0, senderPics.length - 1)];
}

export { generateAuthorName, generateAuthorLogo, getRandomFromRange, generateLetter };
