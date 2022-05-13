/* eslint-disable react/no-danger */
import React, { FC } from 'react';
import QuestImg from '@/assets/img/QuestDude.svg';
import Button from '@/ui/Button/Button';
import classes from './RecentQuest.module.scss';

type PropsType = {

}

const RecentQuest: FC<PropsType> = () => (
  <div className={classes.root}>
    <div className={classes.content}>
      <h1>Интерактивный квест</h1>
      <div className={classes['content-postTitle']}>
        <h2 dangerouslySetInnerHTML={{
          __html: 'Пациент<br />с сахарным<br /> диабетом<br /> и глаукомой',
        }}
        />
      </div>
      <div className={classes.content__description}>
        <p dangerouslySetInnerHTML={{
          __html: 'Рассмотрите случай<br />настоящего пациента:<br /> выберите небходимое<br />обследование, поставьте<br /> диагноз и назначьте лечение.',
        }}
        />
        <img src={QuestImg} alt="course" />
      </div>
    </div>
    <Button>Пройти квест</Button>
  </div>
);

export default RecentQuest;
