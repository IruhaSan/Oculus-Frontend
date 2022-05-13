/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Container from '@/utils/components/Container';
import React, {
  FC, useCallback, useContext, useEffect, useState,
} from 'react';
import IntroBg from '@/assets/img/Intro-Card-Bg.svg';
import Button from '@/ui/Button/Button';
import RecentCourse from '@/utils/components/Layout/components/RecentCourse/RecentCourse';
import RecentQuest from '@/utils/components/Layout/components/RecentQuest/RecentQuest';
import Course from '@/utils/components/Layout/components/Course';
import QuestSlider from '@/utils/components/Layout/components/QuestSlider';
import Papers from '@/utils/components/Layout/components/Papers/Papers';
import CourseContext from '@/utils/components/CourseContext/CourseContext';
import MobileBurgerMenu from '@/utils/components/Layout/components/MobileBurgerMenu/MobileBurgerMenu';
import { CourseType } from '@/utils/model';
import PopUpTest from '@/utils/components/Layout/components/PopUpTest';
import Master1 from '@/assets/img/master1.svg';
import classes from './Home.module.scss';

type PropsType = {
  isBurgerMenuOpen: boolean;
  setBurgerMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: FC<PropsType> = ({ isBurgerMenuOpen, setBurgerMenuState }) => {
  const [courses, setCourses] = useState<CourseType[]>([
    {
      courseTitle: 'Глаукома. От теории к практике.',
      courseSummary: 'В курсе «Глаукома. От теории к практике» коллектив лекторов рассматривает cлучаи пациентов с диагнозом «ПОУГ» и долгосрочную динамику их заболевания, место комбинированных препаратов в терапии глаукомы, влияние приверженности к лечению на динамику заболевания, клинический случай тяжелого течения глаукомы.',
      lectures: [
        { lectureTitle: 'zadnica1', lectureLink: 'https://player.vimeo.com/video/538114902?badge=0&amp;autopause=0&amp', lectureAbout: 'Своевременная диагностика и влияние приверженности к лечению на прогноз и прогрессирование глаукомной оптической нейропатии (клинический случай)' },
        { lectureTitle: 'zadnica2', lectureLink: 'https://player.vimeo.com/video/538106918?badge=0&amp;autopause=0&amp', lectureAbout: 'Своевременная диагностика и влияние приверженности к лечению на прогноз и прогрессирование глаукомной оптической нейропатии (клинический случай)' },
        { lectureTitle: 'zadnica3', lectureLink: 'https://player.vimeo.com/video/538117891?badge=0&amp;autopause=0&amp', lectureAbout: 'Своевременная диагностика и влияние приверженности к лечению на прогноз и прогрессирование глаукомной оптической нейропатии (клинический случай)' },
        { lectureTitle: 'zadnica4', lectureLink: 'https://player.vimeo.com/video/538114902?badge=0&amp;autopause=0&amp', lectureAbout: 'Своевременная диагностика и влияние приверженности к лечению на прогноз и прогрессирование глаукомной оптической нейропатии (клинический случай)' },
        { lectureTitle: 'zadnica5', lectureLink: 'https://player.vimeo.com/video/538106918?badge=0&amp;autopause=0&amp', lectureAbout: 'Своевременная диагностика и влияние приверженности к лечению на прогноз и прогрессирование глаукомной оптической нейропатии (клинический случай)' },
        { lectureTitle: 'zadnica5', lectureLink: 'https://player.vimeo.com/video/538106918?badge=0&amp;autopause=0&amp', lectureAbout: 'Своевременная диагностика и влияние приверженности к лечению на прогноз и прогрессирование глаукомной оптической нейропатии (клинический случай)' },
        { lectureTitle: 'zadnica5', lectureLink: 'https://player.vimeo.com/video/538106918?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha ig5raet v wow' },
      ],
      masters: [
        {
          masterName: 'Куроедов Александр Владимирович',
          masterAbout: 'д.м.н., начальник офтальмологического отделения ФКУ «ЦВКГ им. Мандрыка» МО РФ, профессор кафедры офтальмологии им. акад. А.П. Нестерова лечебного факультета ФГАОУ ВО РНИМУ им. Пирогова МЗ РФ, член Президиума РГО',
          masterLink: Master1,
        },
        {
          masterName: 'Куроедов Александр Владимирович',
          masterAbout: 'д.м.н., начальник офтальмологического отделения ФКУ «ЦВКГ им. Мандрыка» МО РФ, профессор кафедры офтальмологии им. акад. А.П. Нестерова лечебного факультета ФГАОУ ВО РНИМУ им. Пирогова МЗ РФ, член Президиума РГО',
          masterLink: Master1,
        },
        {
          masterName: 'Куроедов Александр Владимирович',
          masterAbout: 'д.м.н., начальник офтальмологического отделения ФКУ «ЦВКГ им. Мандрыка» МО РФ, профессор кафедры офтальмологии им. акад. А.П. Нестерова лечебного факультета ФГАОУ ВО РНИМУ им. Пирогова МЗ РФ, член Президиума РГО',
          masterLink: Master1,
        },
        {
          masterName: 'Куроедов Александр Владимирович',
          masterAbout: 'д.м.н., начальник офтальмологического отделения ФКУ «ЦВКГ им. Мандрыка» МО РФ, профессор кафедры офтальмологии им. акад. А.П. Нестерова лечебного факультета ФГАОУ ВО РНИМУ им. Пирогова МЗ РФ, член Президиума РГО',
          masterLink: Master1,
        },
      ],
      isReleased: true,
      isAnnounced: false,
    },
    {
      courseTitle: 'zadnica1',
      courseSummary: 'sosi',
      lectures: [
        { lectureTitle: 'zadnica1', lectureLink: 'https://player.vimeo.com/video/538114902?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igraet v wow' },
        { lectureTitle: 'zadnica2', lectureLink: 'https://player.vimeo.com/video/538106918?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igraet v wow' },
        { lectureTitle: 'zadnica3', lectureLink: 'https://player.vimeo.com/video/538117891?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igraet v wow' },
        { lectureTitle: 'zadnica4', lectureLink: 'https://player.vimeo.com/video/538114902?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igraet v wow' },
        { lectureTitle: 'zadnica5', lectureLink: 'https://player.vimeo.com/video/538106918?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha ig4raet v wow' },
      ],
      masters: [
        {
          masterName: 'Sasha',
          masterAbout: 'Igrok v Wow',
          masterLink: 'src/assets/img/master1.svg',
        },
      ],
      isReleased: false,
      isAnnounced: true,
      releaseDate: 'Мае',
    },
    {
      courseTitle: 'zadnica2',
      courseSummary: 'sosi',
      lectures: [
        { lectureTitle: 'zadnica1', lectureLink: 'https://player.vimeo.com/video/538114902?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igraet v wow' },
        { lectureTitle: 'zadnica2', lectureLink: 'https://player.vimeo.com/video/538106918?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igraet v wow' },
        { lectureTitle: 'zadnica3', lectureLink: 'https://player.vimeo.com/video/538117891?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igr2aet v wow' },
        { lectureTitle: 'zadnica4', lectureLink: 'https://player.vimeo.com/video/538114902?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igraet v wow' },
        { lectureTitle: 'zadnica5', lectureLink: 'https://player.vimeo.com/video/538106918?badge=0&amp;autopause=0&amp', lectureAbout: 'sasha igraet v wow' },
      ],
      masters: [
        {
          masterName: 'Sasha',
          masterAbout: 'Igrok v Wow',
          masterLink: 'src/assets/img/master1.svg',
        },
      ],
      isReleased: false,
      isAnnounced: true,
      releaseDate: 'Сентябре',
    },
  ]);

  useEffect(() => {
    window.localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    setCourses(JSON.parse(window.localStorage.getItem('courses') || '{}'));
  }, []);

  return (
    <div className={classes.root}>
      {isBurgerMenuOpen && (
        <MobileBurgerMenu />
      )}
      <Container className={classes.medecine_intro}>
        <div className={classes.medecine_intro_description}>
          <h1>Симбринза®</h1>
          <p>открывает новые возможности контроля ВГД</p>
          <p>у пациентов с сердечно-сосудистыми заболеваниями</p>
          <Button onClick={() => console.log('nice cock')}>Узнать больше о препарате</Button>
        </div>
        <img src={IntroBg} alt="introBg" />
      </Container>
      <Container className={classes.updates}>
        <RecentCourse />
        <RecentQuest />
      </Container>
      <Container className={classes['courses-library']} wrapperClassName={classes['courses-library-wrapper']}>
        <h1>Библиотека курсов</h1>
        {courses && courses.map((course, index) => (
          <Course course={course} key={`course_${index}`} />
        ))}
      </Container>
      <Container className={classes['interactive-quests']}>
        <h1>Интерактивные квесты</h1>
        <span>
          Интерактивный формат поможет вам пройти различные сценарии развития заболевания
          в зависимости от вашего выбора и достичь лучшего результатаю
        </span>
        <QuestSlider />
      </Container>
      <Container className={classes.documents}>
        <h1>Полезные материалы</h1>
        <span>Клинические рекомендации, инструкции по применению.</span>
        <Papers />
      </Container>
    </div>
  );
};

export default Home;
