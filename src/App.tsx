import React, {
  lazy, Suspense, FC, useState,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import Layout from '@/utils/components/Layout';
import ROUTES from '@/const/routes';
import '@/assets/styles/index.scss';

const HomePage = lazy(() => import('@/pages/Home/Home'));

const App: FC = () => {
  const [isBurgerMenuOpen, setBurgerMenuState] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <Layout
        isBurgerMenuOpen={isBurgerMenuOpen}
        setBurgerMenuState={setBurgerMenuState}
      >
        <Suspense fallback={(
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '50vh',
          }}
          >
            {/* <LoadingCircle isLoading size={64} /> */}
            LOADING
          </div>
        )}
        >
          <Switch>
            <Route
              path={ROUTES.HOME}
              exact
              render={() => (
                <HomePage
                  isBurgerMenuOpen={isBurgerMenuOpen}
                  setBurgerMenuState={setBurgerMenuState}
                />
              )}
            />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
