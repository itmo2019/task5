import React from 'react';

import '../blocks/menu__button-current.css';
import '../blocks/menu__button-special.css';
import '../blocks/menu__button.css';

export const MenuButton = ({ name, current, special, action }) => {
  let style;
  if (current) {
    style = 'menu__button-current';
  } else if (special) {
    style = 'menu__button-special';
  } else {
    style = 'menu__button';
  }

  return (
    <button className={style} type="button" onClick={action}>
      {name}
    </button>
  );
};
