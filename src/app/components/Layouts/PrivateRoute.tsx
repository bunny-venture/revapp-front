import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AccountService from 'services/accountService';
import { ROUTE } from 'utils/constant';

const PrivateRoute = props => {
  const { component: Component, roles, profile, ...rest } = props;
  const render = Props => {
    if (props.render) {
      return props.render(Props);
    }
    if (AccountService.checkAccessTokenValidity()) {
      return <Component {...props} />;
    }
    return (
      <Redirect
        to={{ pathname: ROUTE.LOGIN, state: { from: Props.location } }}
      />
    );
  };
  return <Route {...rest} render={render} />;
};

export default PrivateRoute;
