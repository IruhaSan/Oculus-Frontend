/* eslint-disable react/no-danger */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useEffect, useState } from 'react';
import Container from '@/utils/components/Container';
import Logo from '@/assets/img/Logo.svg';
import Message from '@/assets/img/Footer-Message.svg';
import Phone from '@/assets/img/Footer-Mobile.svg';
import DocImg from '@/assets/img/FooterDoc.svg';
import Button from '@/ui/Button/Button';
import { TestType } from '@/utils/model';
import classes from './PopUpTest.module.scss';

type PropsType = {
  setTestToggleState: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUpTest: FC<PropsType> = ({ setTestToggleState }) => {
  const test: TestType[] = [
    {
      question: 'Какой из приведенных ниже классов препаратов применяется при первичной открытоугольной глаукоме?',
      options: [
        'Аналоги простагландинов',
        'Сартаны',
        'НПВС',
        'Ингибиторы VEGF',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Пациентов с какими заболеваниями вы принимаете?',
      options: [
        'Глаукома',
        'Катаракта',
        'Панкреатит',
        'Воспаление слизистой оболочки глаза',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'К признакам первичной открытоугольной глаукомы относится:',
      options: [
        'Изменения в пигментном эпителии сетчатки',
        'Гипоплазия радужки',
        'Гиперемия и отек век',
        'Характерные изменения полей зрения',
      ],
      correctAnswerIndex: 3,
    },
  ];
  const [nextQuestion, setNextQuestion] = useState(0);
  const [retryToggle, setRetryState] = useState(false);
  const handleClick = (answer: string) => {
    if (answer === test[nextQuestion].options[test[nextQuestion].correctAnswerIndex]) {
      sessionStorage.setItem('isTestCompleted', 'true');
      setTestToggleState(false);
    } else {
      setRetryState(true);
      setNextQuestion((nextQuestion + 1) % test.length);
    }
  };
  return (
    <div className={classes.root}>
      {
        !retryToggle ? (
          <div className={classes.testPopUp}>
            <div className={classes['testPopUp-header']}>
              <h1>Сайт предназначен только для медицинских и фармацевтических работников.</h1>
            </div>
            <div className={classes['testPopUp-question']}>
              <h1>{test[nextQuestion].question}</h1>
            </div>
            <div className={classes['testPopUp-answers']}>
              <div onClick={() => handleClick(test[nextQuestion].options[0])}>
                <h2>{test[nextQuestion].options[0]}</h2>
              </div>
              <div onClick={() => handleClick(test[nextQuestion].options[1])}>
                <h2>{test[nextQuestion].options[1]}</h2>
              </div>
              <div onClick={() => handleClick(test[nextQuestion].options[2])}>
                <h2>{test[nextQuestion].options[2]}</h2>
              </div>
              <div onClick={() => handleClick(test[nextQuestion].options[3])}>
                <h2>{test[nextQuestion].options[3]}</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.retryPopUp}>
            <h1>Вы ответили неверно</h1>
            <p dangerouslySetInnerHTML={{
              __html: 'Материалы сайта предназначены <br /> только для медицинских и фармацевтических работников',
            }}
            />
            <button onClick={() => setRetryState(false)}>Пройти еще раз</button>
          </div>
        )
      }
    </div>
  );
};

export default PopUpTest;
