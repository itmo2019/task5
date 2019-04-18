export function parseText(text) {
  const div = document.createElement('div');
  div.innerHTML = text;
  let cleanText = div.innerText.replace(/\r?\n|\r/g, '');
  const ind = cleanText.indexOf('References[edit]');
  if (ind > 0) {
    cleanText = cleanText.substring(0, ind);
  }
  return cleanText;
}
