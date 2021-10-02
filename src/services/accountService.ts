import Cookies from 'js-cookie';
import { COOKIE_PREFIX, COOKIE_EXPIRES_DAYS } from 'utils/constant';

// import { monthDiff } from 'utils/dateUtils';

/*
  Preferrably We only use this at sagas.
*/
const AccountService = {
  saveAuth: ({ tokens }) => {
    const { access, refresh, tokenType } = tokens;
    Cookies.set(`${COOKIE_PREFIX}access_token`, access.token, {
      expires: COOKIE_EXPIRES_DAYS,
    });
    Cookies.set(`${COOKIE_PREFIX}expires_in`, access.expires, {
      expires: COOKIE_EXPIRES_DAYS,
    });
    Cookies.set(`${COOKIE_PREFIX}refresh_token`, refresh.token, {
      expires: COOKIE_EXPIRES_DAYS,
    });
    Cookies.set(`${COOKIE_PREFIX}token_type`, tokenType, {
      expires: COOKIE_EXPIRES_DAYS,
    });
  },
  clearAuth: () => {
    Cookies.remove(`${COOKIE_PREFIX}access_token`);
    Cookies.remove(`${COOKIE_PREFIX}expires_in`);
    Cookies.remove(`${COOKIE_PREFIX}refresh_token`);
    Cookies.remove(`${COOKIE_PREFIX}token_type`);
  },
  getAccessToken: () => [
    Cookies.get(`${COOKIE_PREFIX}access_token`),
    Cookies.get(`${COOKIE_PREFIX}expires_in`),
    Cookies.get(`${COOKIE_PREFIX}refresh_token`),
  ],
  getRefreshToken: () => Cookies.get(`${COOKIE_PREFIX}refresh_token`),
  checkAccessTokenValidity: () => {
    const [accessToken] = AccountService.getAccessToken();
    if (!accessToken) {
      return false;
    }
    // const expiryDate = new Date(expires);
    // if (expiryDate < new Date()) {
    //   return false;
    // }
    return true;
  },
};

export default AccountService;
