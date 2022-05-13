import React, { FC } from 'react';
import Container from '@/utils/components/Container';
import Logo from '@/assets/img/Logo.svg';
import Message from '@/assets/img/Footer-Message.svg';
import Phone from '@/assets/img/Footer-Mobile.svg';
import DocImg from '@/assets/img/FooterDoc.svg';
import Button from '@/ui/Button/Button';
import classes from './Footer.module.scss';

const Footer: FC = () => (
  <Container className={classes.root}>
    <div className={classes.subscribe}>
      <div className={classes['subscribe-info']}>
        <h1>Хотите первыми увидеть новые материалы?</h1>
        <img src={DocImg} alt="footerDoc" />
        <span>Подпишитесь и узнавайте первым о появлении новых курсов и интерактивных квестов</span>
        <Button>Подписаться</Button>
      </div>
    </div>
    <div className={classes.info}>
      <img src={Logo} alt="logo" />
      <div className={classes.info_description}>
        <h2>Проект подготовлен компанией Новартис совместно с ведущими врачами-офтальмологами.</h2>
        <span>
          Если у вас или вашего пациента возникло нежелательное явление на фоне применения
          препаратов группы компаний «Новартис» («Новартис Фарма», «Новартис Онкология» и «Сандоз»), пожалуйста,
          сообщите об этом в Единый центр по фармаконадзору
        </span>
        <div className={classes.info_description_email}>
          <img src={Message} alt="message" />
          <span>drug.safety_russia@novartis.com</span>
        </div>
        <div className={classes.info_description_phone}>
          <img src={Phone} alt="phone" />
          <span>+7 495 967 12 70</span>
        </div>
      </div>
      <div className={classes['info_description-mobile']}>
        <div className={classes.info_description_email}>
          <img src={Message} alt="message" />
          <span>drug.safety_russia@novartis.com</span>
        </div>
        <div className={classes.info_description_phone}>
          <img src={Phone} alt="phone" />
          <span>+7 495 967 12 70</span>
        </div>
        <h2>Проект подготовлен компанией Новартис совместно с ведущими врачами-офтальмологами.</h2>
        <span>
          Если у вас или вашего пациента возникло нежелательное явление на фоне применения
          препаратов группы компаний «Новартис» («Новартис Фарма», «Новартис Онкология» и «Сандоз»), пожалуйста,
          сообщите об этом в Единый центр по фармаконадзору
        </span>
      </div>
    </div>
  </Container>
);

export default Footer;
