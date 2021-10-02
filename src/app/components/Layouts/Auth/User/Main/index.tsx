import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { userAuthRoutes } from '../../../../../../routes/Auth/User/userAuthRoutes';

export function Main() {
  return (
    <StyledMain className="custom-scroll">
      <BrowserRouter>
        <Switch>
          {userAuthRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
          <Redirect from="/" to="/announcement" />
        </Switch>
      </BrowserRouter>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  height: 100%;
  padding: 1.5rem;
  background-color: #eff6ff;
  overflow-y: auto;
`;
