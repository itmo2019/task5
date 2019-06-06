export function createLatch(count, callback) {
  return {
    count,
    countDown() {
      this.count--;
      if (this.count === 0) {
        callback();
      }
    }
  };
}
