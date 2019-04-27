import randomInteger from '../random-integer';

function loadInfo(callback) {
  const year = randomInteger(100, 2019);

  function getText(json) {
    const text = JSON.parse(json).text_out;
    return text.replace('<h1>', ` ${year} `).replace('</h1>', ` ${year} `);
  }

  let that = this;
  fetch(`https://www.randomtext.me/api/lorem/h1/10`)
    .then(function(response) {
      if (response.status === 200) {
        return response.text().then(text => {
            callback(getText(text));
          }
        );
      } else {
        console.error(response.statusText);
      }
    });
}

export default loadInfo;
