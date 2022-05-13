/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './Home';

type PropsType = {
  isBurgerMenuOpen: boolean;
  setBurgerMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage: FC<PropsType> = ({ ...props }) => (
  <>
    <Helmet title="Home page" />
    <Home
      isBurgerMenuOpen={props.isBurgerMenuOpen}
      setBurgerMenuState={props.setBurgerMenuState}
    />
  </>
);

export default HomePage;
