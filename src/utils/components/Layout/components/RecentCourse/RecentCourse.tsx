/* eslint-disable dot-notation */
/* eslint-disable react/no-danger */
import React, { FC } from 'react';
import CourseImg from '@/assets/img/RecentCourse.svg';
import Button from '@/ui/Button/Button';
import classes from './RecentCourse.module.scss';

type PropsType = {

}

const RecentCourse: FC<PropsType> = () => (
  <div className={classes.root}>
    <div className={classes.content}>
      <h1>Новый курс</h1>
      <div className={classes['content-postTitle']}>
        <h2 dangerouslySetInnerHTML={{
          __html: 'Глаукома.<br />От теории к практике.',
        }}
        />
      </div>
      <div className={classes['content__description']}>
        <div className={classes['content__description-hosts']}>
          <span>Курс читает:</span>
          <p>Антонов А.А.</p>
          <p>Куроедов А.В.</p>
          <p>Брежнев А.Ю.</p>
          <p>Карлова Е.В.</p>
        </div>
        <img src={CourseImg} alt="course" />
      </div>
    </div>
    <Button>начать обучение</Button>
  </div>
);

export default RecentCourse;
