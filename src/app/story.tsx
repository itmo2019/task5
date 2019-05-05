import * as React from 'react';

import '../index.css';
import '../blocks/inbox__story-circle-picture.css';
import '../blocks/inbox__close-story-button.css';
import christmas from '../images/christmas.jpg';

export const Story = () => {
  return (
    <div className="inbox__story">
      <label className="inbox__close-story-button" htmlFor="show">&times;</label>
      <img alt="Венок" className="inbox__story-circle-picture" src={christmas}/>
        Рождественский венок — типичное украшение в домах в предрождественское время в форме венка из еловых
        веток с
        четырьмя свечами, закрепляемое вертикально или устанавливаемое на стол. В первое из четырёх воскресений
        адвента зажигается первая свеча, на следующей неделе — вторая и т. д.
        Рождественский венок был введён в рождественские традиции гамбургским лютеранским теологом Иоганном
        Хинрихом
        Вихерном, взявшим на воспитание нескольких детей из семей бедняков. В адвент дети постоянно спрашивали
        воспитателя, когда же наступит Рождество. Чтобы дети могли отсчитывать дни до Рождества, в
        1839 году Вихерн смастерил из старого деревянного колеса венок, украшенный двадцатью четырьмя малыми
        красными и четырьмя большими белыми свечами. Каждое утро в этом венке зажигалось по одной маленькой
        свечке,
        к которым по воскресеньям добавлялась большая свеча.
        В Европе венок нес особый смысл – это символ радости и веры. Рождественский венок, как со свечей, так и
        без
        нее, все равно нес в себе особое значение и его могли повесить на дверь или просто на стену. На двери он
        говорил всем приходящим о гостеприимстве хозяев и готовности к празднику, а на стене был просто
        украшением и
        напоминал о приближении Рождества.
    </div>
  )
};
