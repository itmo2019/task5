import * as Requests from './requests';

const RANDOM_TEXT_API_URL = 'https://baconipsum.com/api';

export const RANDOM_TEXT_TYPES = {
  ALL_MEAT: 'all-meat',
  MEAT_AND_FILLER: 'meat-and-filler'
};

export const RANDOM_TEXT_FORMATS = {
  JSON: 'json',
  TEXT: 'text',
  HTML: 'html'
};

export const newRandomArticle = () => {
  return {
    selectedFormat: null,
    selectedType: null,
    selectedParagraphs: null,

    appendParam(url, name, value) {
      // no url encode happens in here
      return `${url}&${name}=${value}`;
    },

    buildUrl() {
      let result = `${RANDOM_TEXT_API_URL}?type=${this.selectedType}`;
      if (this.selectedParagraphs) {
        result = this.appendParam(result, 'paras', this.selectedParagraphs);
      }
      if (this.selectedFormat) {
        result = this.appendParam(result, 'format', this.selectedFormat);
      }

      return result;
    },

    format(value) {
      this.selectedFormat = value;
      return this;
    },
    type(value) {
      this.selectedType = value;
      return this;
    },
    paras(value) {
      this.selectedParagraphs = value;
      return this;
    },

    async get() {
      if (this.selectedType) {
        return Requests.fetchJSON(this.buildUrl());
      }

      throw new Error('Can not generate article: type is not set');
    }
  };
};
