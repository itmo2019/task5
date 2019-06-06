export const initials = name => {
  return name
    .split(/\s+/)
    .map(s => s.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

export const randomColor = () => {
  const hsvToRGB = (h, s, v) => {
    const h1 = Math.floor(h * 6);
    const f = h * 6 - h1;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const rgb = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][h1];
    return rgb.map(c => Math.floor(c * 256));
  };

  return hsvToRGB(Math.random(), 0.4, 0.85);
};

export const formatDatetime = date => {
  return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
};

export const toRussianDate = date => {
  // noinspection JSUnresolvedFunction
  return new Intl.DateTimeFormat('ru', { day: 'numeric', month: 'short' }).format(date);
};

export const mergeObjects = (obj1, obj2) => Object.assign({}, obj1, obj2);
