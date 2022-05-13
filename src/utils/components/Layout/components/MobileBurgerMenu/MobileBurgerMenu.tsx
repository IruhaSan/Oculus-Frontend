/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Container from '@/utils/components/Container';
import React, { FC } from 'react';
import Logo from '@/assets/img/Logo.svg';
import Button from '@/ui/Button/Button';
import classes from './MobileBurgerMenu.module.scss';

type PropsType = {

}

const MobileBurgerMenu: FC<PropsType> = ({ ...props }) => (
  <Container className={classes.root} wrapperClassName={classes['root-wrapper']}>
    <div className={classes.content}>
      <h1>Меню</h1>
      <Button>Курсы</Button>
      <Button>Квесты</Button>
      <Button>Полезные материалы</Button>
      <Button className={classes.gradient}>На главную</Button>
    </div>
  </Container>
);

export default MobileBurgerMenu;
