import createMarkovChain from './markov-chain';

const sampleText = `Согласно ежегодному исследованию StackOverflow, самая популярная профессия среди пользователей сервиса в 2017 году — это Web developer. Именно в эту категорию входят все фронтенд-разработчики. 
Если зайти на первый попавшийся сайт по поиску работы, например, на hh.ru, создастся впечатление, что фронтенд-разработчик — это специалист-хамелеон. 
Начинается все с путаницы в названиях вакансий: можно встретить и «front-end developer», и «front end разработчик», и «фронтендщик», и «фронтенд девелопер», и «web developer», и «фронтенд-разработчик». Иногда даже можно увидеть какого-нибудь «веб-верстальщика» с требованиями под фулстак-разработчика. Реакция на это одна: WTF?!
Беда в том, что часть работодателей не отличают (или не хотят отличать) верстальщика от фронтенд-разработчика, — это понятно по описанию вакансий. Разберемся, какие умения отделяют фронтенд-разработчика от «верстака» (верстальщики, не обижайтесь, вы тоже хорошие).
Верстальщик — боец узкого фронта. Его задача — сверстать полученный от дизайнера макет, используя HTML+CSS. Он, возможно, немного умеет в JavaScript, но чаще ограничивается умением прикрутить какой-нибудь плагин jQuery.
Фронтенд-разработчик не просто верстает макеты. Он хорошо знает JavaScript, разбирается во фреймворках и библиотеках (и активно юзает часть из них), понимает, что находится «под капотом» на серверной стороне. Его не пугают препроцессоры и сборщики LESS, SASS, GRUNT, GULP, он умеет работать с DOM, API, SVG-объектами, AJAX и CORS, может составлять SQL-запросы и копаться в данных. Получается сборная солянка навыков, к которым добавляется понимание принципов UI/UX-проектирования, адаптивной и отзывчивой верстки, кросс-браузерности и кросс-платформенности, а иногда и навыков мобильной разработки. 
Фронтендщик в обязательном порядке умеет работать с контролем версий (Git, GitHub, CVS и т. д.), использовать графические редакторы, «играть» с шаблонами различных CMS.
Еще крайне желательно знать английский язык, чтобы не переводить спецификацию в Гугл-переводчике, уметь работать в команде, иногда мультиязычной, разбираться в веб-шрифтах, ну и понимать тестировщиков и сам процесс тестирования. `;

const markovChain = createMarkovChain(sampleText);

export default function generateText(paragraphsInText, sentencesInParagraph) {
  const paragraphs = [];
  for (let p = 0; p < paragraphsInText; p++) {
    const sentences = [];
    for (let s = 0; s < sentencesInParagraph; s++) {
      const sentence = markovChain.sequence().join(' ');
      sentences[s] = `${sentence[0].toUpperCase() + sentence.substr(1)}.`;
    }
    paragraphs[p] = sentences.join(' ');
  }

  return paragraphs.join(' ');
}
