/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Container from '@/utils/components/Container';
import React, { FC, Props } from 'react';
import Logo from '@/assets/img/Logo.svg';
import Button from '@/ui/Button/Button';
import classes from './Header.module.scss';

type PropsType = {
  isBurgerMenuOpen: boolean;
  setBurgerMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<PropsType> = ({ ...props }) => (
  <div className={classes.root}>
    <Container>
      <div className={classes.content}>
        <img src={Logo} alt="logo" />
        <div className={classes['burger_menu-icon']} onClick={() => props.setBurgerMenuState(!props.isBurgerMenuOpen)} />
        <div className={classes.content_navigation}>
          <h1>Курсы</h1>
          <h1>Квесты</h1>
          <h1>Полезные материалы</h1>
        </div>
        <Button onClick={() => console.log('Переслать куда-то')}>На главную</Button>
      </div>
    </Container>
  </div>
);

export default Header;
