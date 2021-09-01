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

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { guestRoutes } from '../routes/Guest/publicRoutes';
import { UserAuthenticatedComponent } from './pages/Auth/User';
import { AdminAuthenticatedComponent } from './pages/Auth/Admin';

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
        {/* Guest Routes */}
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

        {/* Authenticated Routes */}
        <Route path={'/user'} component={UserAuthenticatedComponent} />
        <Route path={'/admin'} component={AdminAuthenticatedComponent} />

        {/* No Found Routes */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
