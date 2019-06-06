const random = {
  int(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
  },

  boolean() {
    return this.int(0, 2) === 0;
  },

  element(array) {
    return array.length === 0 ? undefined : array[this.int(0, array.length)];
  }
};

export default random;
