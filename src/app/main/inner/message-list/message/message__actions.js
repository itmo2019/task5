// import composer from './message__composer';
import CroissantImage from './message__image.png';

// const TIME_INTERVAL = 300000;

export function checkAll(toolbarCheckbox) {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].checked = toolbarCheckbox.checked;
  }
}

// export async function newMessage() {
//   const mailList = document.getElementById('messages');
//
//   const mail = document.createElement('section');
//   mail.innerHTML = await composer();
//   mail.firstChild.id = 'message__id';
//
//   mailList.insertBefore(mail, mailList.firstChild);
//
//   const GC = document.getElementById('message__id');
//   setTimeout(() => {
//     GC.classList.add('message_show');
//   }, 20);
//   setTimeout(() => {
//     GC.removeAttribute('id');
//   }, 500);
// }

export function deleteMessage() {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 1; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true && i < 30) {
      const container = checkboxes[i].parentElement.parentElement;
      container.classList.remove('message_show');
      setTimeout(() => {
        container.parentElement.remove();
      }, 500);
    }
  }
  checkboxes[0].checked = false;
  checkAll(checkboxes[0]);
}



// randomMailIncoming();

let text = 'no text';
let author = 'no author';

export function formCroissant() {
  author = 'История круассана';
  text = `<img alt="Свежий круассан" class="message__image" src=${CroissantImage} width="180">

        Мучные изделия в форме полумесяцев выпекались в Австрии по меньшей мере с XIII века. Но началом
        нынешней популярности круассанов можно считать 1839 год, когда австрийский артиллерийский офицер
        Август Цанг открыл в Париже «Венскую пекарню», где пекли такие булочки.
        <p>Существует легенда, что в 1683 году венский пекарь Петер Вендлер впервые сделал булочку в
        честьнеуспеха турецкой осады Вены. Османское войско осадило Вену; пекари, работавшие по ночам и
        готовившие для горожан свежие булочки к утру, услышали шум от мотыг и кирок, — поняли, что
        турки делают подкоп под стенами города. Вовремя предупредив об этом солдат, они сорвали план врага.
        <p>По другой версии, спустя некоторое время после осады, шляхтичем Юрием Кульчицким в Вене была
        открыта первая знаменитая кофейня, в которой подавали круассаны в форме османского полумесяца и
        ароматный кофе по-восточному. Считается, что с тех пор эти необычные булочки стали очень
        популярны среди покупателей.
        <p>В 1770 году круассан впервые появился во Франции. Это случилось благодаря приезду из Вены
        Марии-Антуанетты и появлению вместе с ней в Париже «венской выпечки». Но венский и французский
        круассаны — это всё же два разных изделия. Ведь из Вены — только форма изделия, а изготовили
        его впервые из слоёного теста с маслом именно французские повара, и это случилось в начале XX
        века.
        В скором времени появилось целое «семейство» подобных дрожжевых и слоеных булочек, например,
        улитка с изюмом, слойка с яблочным пюре, слойка с шоколадом и т. д. В 2013 году
        антиправительственные повстанцы в Сирии запретили круассаны на контролируемой ими территории
        в Алеппо, объясняя свой запрет вышеупомянутой австрийской легендой`;
}

// export function formMessagePage(parent) {
//   text = parent.querySelector('.message__subject').textContent;
//   author = parent.parentElement.querySelector('.message__contact').textContent;
// }
//
// export function changeMessagePage(checkbox) {
//   if (checkbox.checked === true) {
//     document.querySelector('.message__page').remove();
//     const content = document.querySelector('.message__content');
//     const page = document.createElement('div');
//     page.classList.add('message__page');
//     const pageAuthor = document.createElement('p');
//     pageAuthor.textContent = `От кого: ${author}`;
//     const pageText = document.createElement('p');
//     pageText.innerHTML = text;
//     page.innerHTML = pageAuthor.outerHTML + pageText.outerHTML;
//     content.appendChild(page);
//   }
// }
