import clsx from 'clsx';
import React, {
  FC, useEffect, useState,
} from 'react';
import Container from '../Container';
import Footer from './components/Footer';
import Header from './components/Header';
import PopUpTest from './components/PopUpTest';
import classes from './Layout.module.scss';

type PropsType = {
    children: React.ReactNode
    isBurgerMenuOpen: boolean;
    setBurgerMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Layout: FC<PropsType> = ({ isBurgerMenuOpen, setBurgerMenuState, children }) => {
  const [isTestOpen, setTestToggleState] = useState<boolean>(sessionStorage.getItem('isTestCompleted') !== 'true');
  useEffect(() => {
    if (isTestOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isTestOpen]);
  return (
    <div>
      {isTestOpen && (
        <div className={clsx(classes.popUpTest, { [classes['root-blured']]: isTestOpen })}>
          <PopUpTest setTestToggleState={setTestToggleState} />
        </div>
      )}
      <Header
        isBurgerMenuOpen={isBurgerMenuOpen}
        setBurgerMenuState={setBurgerMenuState}
      />
      <div
        className={classes.root}

      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
