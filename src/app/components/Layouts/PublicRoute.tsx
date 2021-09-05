import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTE } from 'utils/constant';
import AccountService from 'services/accountService';

const PublicRoute = props => {
  const {
    component: Component,
    roles,
    profile,
    noAuthOnly = false,
    ...rest
  } = props;

  const render = Props => {
    if (props.render) {
      return props.render(Props);
    }
    if (AccountService.checkAccessTokenValidity() && noAuthOnly) {
      return (
        <Redirect
          to={{ pathname: ROUTE.ANNOUNCEMENT, state: { from: Props.location } }}
        />
      );
    }

    return <Component {...Props} />;
  };

  return <Route {...rest} render={render} />;
};

export default PublicRoute;