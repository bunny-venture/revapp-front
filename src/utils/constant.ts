const URL = process.env.REACT_APP_API
  ? `${process.env.REACT_APP_API}`
  : `https://api-revapp.herokuapp.com/v1/`;

export const COOKIE_PREFIX = 'revapp_';
export const COOKIE_EXPIRES_DAYS = 1;

export const API = {
  AUTH_LOGIN: `${URL}auth/login`,
  AUTH_REGISTER: `${URL}auth/register`,
  VOUCHER: `${URL}vouchers`,
  SUBJECT: `${URL}subjects`,
  QUESTION_TYPE: `${URL}question-types`,
  QUESTION: `${URL}questions`,
  QUESTIONNAIRE: `${URL}questionnaires`,
  USER: `${URL}users`,
};

export const ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
};
