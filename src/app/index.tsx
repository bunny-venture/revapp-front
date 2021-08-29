/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { guestRoutes } from '../routes/publicRoutes';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s" htmlAttributes={{ lang: i18n.language }}>
        <meta
          name="description"
          content="A RevApp application for nursing board examineers students"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        />
      </Helmet>

      <Switch>
        {guestRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          );
        })}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
