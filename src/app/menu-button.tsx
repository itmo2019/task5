import * as React from 'react';

import '../blocks/menu__button-current.css';
import '../blocks/menu__button-special.css';
import '../blocks/menu__button.css';

interface MenuButtonProps {
  name: string;
  current?: boolean;
  special?: boolean;
  action?: () => void;
}

export const MenuButton = ({ name, current, special, action }: MenuButtonProps) => {
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
