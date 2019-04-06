export function handleCheckBoxClick(event) {
  if (!event.target.checked) {
    document.body.querySelector('.Check__Input').checked = false;
  }
}

export function removeClass(letter, className) {
  const notReadObjs = letter.getElementsByClassName(className);
  while (notReadObjs.length > 0) {
    notReadObjs[0].classList.remove(className);
  }
}

export function unmarkLetter(letter) {
  letter.classList.remove('Letter_Unread');
  removeClass(letter, 'Letter__ReadMark_Unread');
}
