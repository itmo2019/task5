/* Returns result in ms */
export function getRandomTimeout(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}
