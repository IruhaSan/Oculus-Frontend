/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import ArrowLeft from '@/assets/img/ArrowLeft.svg';
import ArrowRight from '@/assets/img/ArrowRight.svg';
import QuestSliderDude from '@/assets/img/QuestSliderDude.svg';
import ActiveSlide from '@/assets/img/SliderActiveSlide.svg';
import Slide from '@/assets/img/SliderSlide.svg';
import Quest1 from '@/assets/img/quest1.svg';
import Quest2 from '@/assets/img/quest2.svg';
import Quest3 from '@/assets/img/quest3.svg';
import Quest4 from '@/assets/img/quest4.svg';
import classes from './QuestSlider.module.scss';

type PropsType = {

}

const QuestSlider:FC<PropsType> = () => {
  const quests = [Quest1, Quest2, Quest3, Quest4];
  const [questOnDisplay, setQuestOnDisplay] = useState(0);
  const handleClick = (side: string) => {
    if (side === 'right') {
      (questOnDisplay === quests.length - 1) ? setQuestOnDisplay(0) : setQuestOnDisplay(questOnDisplay + 1);
    } else if (side === 'left') {
      (questOnDisplay === 0) ? setQuestOnDisplay(quests.length - 1) : setQuestOnDisplay(questOnDisplay - 1);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.slider}>
        <div className={classes['slider-left']} onClick={() => handleClick('left')}>
          <img src={ArrowLeft} alt="slideLeft" />
        </div>
        {quests ? (
          <img src={quests[questOnDisplay]} alt={`quest${questOnDisplay}`} />
        ) : (
          <img src={QuestSliderDude} alt="questNone" />
        )}
        <div className={classes['slider-right']} onClick={() => handleClick('right')}>
          <img src={ArrowRight} alt="slideRight" />
        </div>
      </div>
      <div className={classes['slider-mobile']}>
        <div className={classes['slider-mobile__arrow']} onClick={() => handleClick('left')}>
          <img src={ArrowLeft} alt="slideLeft" />
        </div>
        {`Квест ${questOnDisplay + 1} из ${quests.length}`}
        <div className={classes['slider-mobile__arrow']} onClick={() => handleClick('right')}>
          <img src={ArrowRight} alt="slideRight" />
        </div>
      </div>
      <div className={classes['slider-mobile__quest']}>
        {quests ? (
          <img src={quests[questOnDisplay]} alt={`quest${questOnDisplay}`} />
        ) : (
          <img src={QuestSliderDude} alt="questNone" />
        )}
      </div>
      <div className={classes['slider-position']}>
        {quests && quests.map((quest, index) => (
          (index === questOnDisplay) ? (
            <img src={ActiveSlide} alt="slide" key={`slide${index}`} />
          ) : (
            <img src={Slide} alt="slide" key={`slide${index}`} />
          )
        ))}
      </div>
    </div>
  );
};

export default QuestSlider;
