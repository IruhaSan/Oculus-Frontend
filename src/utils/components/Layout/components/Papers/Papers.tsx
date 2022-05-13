/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import React, { FC, useState } from 'react';
import Paper from '@/assets/img/Paper.svg';
import Flex from '@/assets/img/CircumFlexRotated.svg';
import Button from '@/ui/Button/Button';
import clsx from 'clsx';
import classes from './Papers.module.scss';

type PropsType = {

}

const Papers:FC<PropsType> = () => {
  const [isShowAll, setShowAllState] = useState(false);
  const papers = [
    'Клинические рекомендации Глаукома первичная открытоугольная',
    'Клинические рекомендации Глаукома первичная закрытоугольная',
    '(ENG) Руководство по лечению глаукомы Международного совета...',
    'Jopa',
    'Jopa2',
    'Jopa3',
    'Jopa',
  ];
  return (
    <div className={classes.root}>
      {isShowAll ? papers.map((paper, index) => (
        <div className={classes['paper-form']} key={`paper_${index}`}>
          <div className={classes['paper-form__name']}>
            <img src={Paper} alt="paper" />
            <span>{paper}</span>
          </div>
          <div className={classes['paper-form__open']}>
            <Button>Открыть материал</Button>
          </div>
        </div>
      )) : papers.slice(0, 3).map((paper, index) => (
        <div className={classes['paper-form']} key={`paper_${index}`}>
          <div className={classes['paper-form__name']}>
            <img src={Paper} alt="paper" />
            <span>{paper}</span>
          </div>
          <div className={classes['paper-form__open']}>
            <Button>Открыть материал</Button>
          </div>
        </div>
      ))}
      <Button onClick={() => setShowAllState(!isShowAll)}>
        показать все
        <img src={Flex} alt="flex" className={clsx(classes.root__circum__def, { [classes.root__circum__rotated]: isShowAll })} />
      </Button>
    </div>
  );
};
export default Papers;
