/* eslint-disable react/button-has-type */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import BibleCardImg from '@/assets/img/bible-card-bg.png';
import BibleArrowUpImg from '@/assets/img/ArrowUp.svg';
import BibleArrowDownImg from '@/assets/img/ArrowDown.svg';
import MasterImg1 from '@/assets/img/master1.svg';
import ArrowLectionImg from '@/assets/img/arrow_lection.svg';
import clsx from 'clsx';
import { CourseType } from '@/utils/model';
import ReleaseDate from '@/assets/img/CourseReleaseDate.svg';
import classes from './Course.module.scss';

type PropsType = {
  course: CourseType;
}

const Course:FC<PropsType> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLection, setCurrentLection] = useState(0);
  const lections = props.course.lectures;
  return (
    <div className={classes.root}>
      <div className={clsx(classes.course, { [classes.course__disabled]: !props.course.isReleased })}>
        <div className={clsx(classes['course-intro'], { [classes['course-intro_bordered']]: isOpen })}>
          <div className={classes['course-intro_description']}>
            <h1>{props.course.courseTitle}</h1>
            <p>
              {props.course.courseSummary}
            </p>
          </div>
          <div className={clsx(classes['course-intro_lection'], { [classes['course-intro_lection__announced']]: props.course.isAnnounced })}>
            {!props.course.isReleased && props.course.isAnnounced && props.course.releaseDate && (
            <div className={classes['course-intro_lection__announced__release-date']}>
              <img src={ReleaseDate} alt="releaseDate" />
              <span>
                старт в
                {' '}
                {props.course.releaseDate}
              </span>
            </div>
            )}
            <h2>{lections.length}</h2>
            <h3>лекций</h3>
            <div className={classes['course-intro__mobileTotalLections']}>
              <div>
                <h2>{lections.length}</h2>
                <h3>лекций</h3>
              </div>
              {props.course.isReleased && (
              <button onClick={() => props.course.isReleased && setIsOpen(!isOpen)}>свернуть</button>
              )}
              {
                !props.course.isReleased && (
                <div className={classes['course-intro__mobileTotalLections-announce']}>
                  <img src={ReleaseDate} alt="releaseDate" />
                  <span>
                    старт в
                    <br />
                    {props.course.releaseDate}
                  </span>
                </div>
                )
              }
            </div>
          </div>
          <img src={BibleCardImg} alt="introBg" className={clsx(classes['course-intro_bibleCard'], { [classes['course-intro_bibleCard__opened']]: isOpen })} />
        </div>
        {isOpen && (
          <div className={classes['course-content']}>
            <p>Курсы читают: </p>
            <div className={classes['course-content__main']}>
              {
              props.course.masters.map((master) => (
                <div className={classes['course-content__main-masters']} key={1}>
                  <img src={master.masterLink} alt="Master1" />
                  <div className={classes['course-content__main-masters__description']}>
                    <h1>{master.masterName}</h1>
                    <p>{master.masterAbout}</p>
                  </div>
                </div>
              ))
            }
            </div>
            <div className={classes['course-content__lectionMain']}>
              <div className={classes['course-content__lectionMain-lection']}>
                <div className={classes['course-content__lectionMain-lection__mobileSlider']}>
                  <img src={ArrowLectionImg} onClick={() => (currentLection < lections.length - 1) && setCurrentLection((currentLection + 1) % lections.length)} alt="Left" className={classes['course-content__lectionMain-lection__mobileSlider-left']} />
                  <h2>
                    Лекция
                    {' '}
                    {currentLection + 1}
                    {' '}
                    из
                    {' '}
                    {lections.length}
                  </h2>
                  <img src={ArrowLectionImg} alt="Right" className={classes['course-content__lectionMain-lection__mobileSlider-right']} onClick={() => (currentLection >= 1) && setCurrentLection(currentLection - 1)} />
                </div>
                <h2>
                  Лекция
                  {' '}
                  {currentLection + 1}
                  {' '}
                  из
                  {' '}
                  {lections.length}
                </h2>
                <img src={ArrowLectionImg} onClick={() => (currentLection < lections.length - 1) && setCurrentLection((currentLection + 1) % lections.length)} alt="Left" className={classes['course-content__lectionMain-lection__left']} />
                <iframe src={`${lections[currentLection % lections.length].lectureLink}`} width="680" height="380" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                <img src={ArrowLectionImg} alt="Right" className={classes['course-content__lectionMain-lection__right']} onClick={() => (currentLection >= 1) && setCurrentLection(currentLection - 1)} />
                <div>
                  <h3>
                    {lections[currentLection].lectureAbout}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {props.course.isReleased ? (isOpen ? (
        <div className={classes['root-openArrow']} onClick={() => setIsOpen(!isOpen)}>
          <img src={BibleArrowUpImg} alt="ArrowUp" />
        </div>
      ) : (
        <div className={classes['root-openArrow']} onClick={() => setIsOpen(!isOpen)}>
          <img src={BibleArrowDownImg} alt="ArrowDown" />
        </div>
      )
      ) : (isOpen ? (
        <div className={clsx(classes['root-openArrow'], { [classes['root-openArrow__disabled']]: !props.course.isReleased })}>
          <img src={BibleArrowUpImg} alt="ArrowUp" />
        </div>
      ) : (
        <div className={clsx(classes['root-openArrow'], { [classes['root-openArrow__disabled']]: !props.course.isReleased })}>
          <img src={BibleArrowDownImg} alt="ArrowDown" />
        </div>
      )
      )}
    </div>
  );
};

export default Course;
